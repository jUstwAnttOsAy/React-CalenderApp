import React, { useState, useEffect } from "react";

function NoteList(props) {
  const [noteDate, setNoteDate] = useState(props.date);
  const [noteList, setNoteList] = useState([]);
  const [newwords, setNewWords] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const viewDate = `${props.date.getFullYear()}-${
    props.date.getMonth() + 1
  }-${props.date.getDate()}`;

  useEffect(() => {
    setNoteDate(props.date);
    document
      .getElementById("newWordsInput")
      .addEventListener("change", handleNewWordsInput);

    return () => {
      document
        .getElementById("newWordsInput")
        .removeEventListener("change", handleNewWordsInput);
    };
  }, [props.date]);

  const handleNewWordsInput = (event) => {
    const newWords = event.target.value;
    setNewWords(newWords);
  };

  const updNoteList = () => {
    setIsLoading(true);
    console.log(`update note! ${noteDate}`);
    fetch(
      `http://localhost:9000/calendarNoteAPI/get/${noteDate.getFullYear()}/${
        noteDate.getMonth() + 1
      }/${noteDate.getDate()}`,
      {
        method: "GET",
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        const initList = result.map((elem) => {
          return {
            id: elem.id,
            words: elem.words,
          };
        });
        setNoteList(initList);
      })
      .then(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    updNoteList();
    return () => {
      setNoteList();
    };
  }, [noteDate]);

  const addNoteClick = (event) => {
    fetch(`http://localhost:9000/calendarNoteAPI/send/`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        noteDate: viewDate,
        words: newwords,
      }),
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        updNoteList();
      })
      .then(() => {
        setNewWords("");
      });
    console.log(`insert a note in Date ${viewDate} words: ${newwords}`);
  };

  const removeNoteClick = (id) => {
    console.log(`http://localhost:9000/calendarNoteAPI/delete/${id}`);
    fetch(`http://localhost:9000/calendarNoteAPI/delete/${id}`, {
      headers: {
        "Content-type": "application/json; charset=UTF-8", // Indicates the content
      },
      method: "DELETE",
      mode: "cors",
    })
      .then((res) => {
        console.log(res);
      })
      .then(() => {
        updNoteList();
      });
    console.log(`remove a note in Date ${viewDate} at id: ${id}`);
  };

  return (
    <div className="notes">
      <p>
        <input
          id="newWordsInput"
          type="text"
          placeholder="new note"
          value={newwords}
        />
        <button className="addNote animate" onClick={addNoteClick}>
          +
        </button>
      </p>
      <ul className="noteList">
        {isLoading ? (
          <li>讀取中...</li>
        ) : (
          noteList.map((elem) => {
            return (
              <li key={elem.id}>
                {elem.words}
                <button
                  className="removeNote animate"
                  onClick={() => {
                    removeNoteClick(elem.id);
                  }}
                >
                  x
                </button>
              </li>
            );
          })
        )}
      </ul>
    </div>
  );
}

export default NoteList;
