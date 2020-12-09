
import React, { useEffect } from "react"
import './App.css';
import Trello from './component/Trello';

function App() {


  const data = {

    "lanes": [
      {
        "id": "PLAN",
        "title": "Plan",
        "label": "20/70",
        "style": {
          "width": 280
        },
        "cards": [
          {
            "id": "Plan1",
            "title": "Title 1",
            "label": "15 mins",
            "description": "lorem ipsum dolar"
          },
          {
            "id": "Plan2",
            "title": "Title 2",
            "label": "10 mins",
            "description": "lorem ipsum dolar"
          },
          {
            "id": "Plan3",
            "title": "Title 3",
            "label": "30 mins",
            "description": "lorem ipsum dolar"
          },
          {
            "id": "Plan4",
            "title": "Title 4",
            "label": "5 mins",
            "description": "lorem  ipsum dolar"
          }
        ]
      },
      {
        "id": "WIP",
        "title": "Do",
        "label": "10/20",
        "style": {
          "width": 280
        },
        "cards": [
          {
            "id": "Wip1",
            "title": "Title 1 ",
            "label": "30 mins",
            "description": "Title 1"
          }
        ]
      },

      {
        "id": "COMPLETED",
        "title": "Check",
        "style": {
          "width": 280
        },
        "label": "2/5",
        "cards": [
          {
            "id": "Completed1",
            "title": "Title 1 ",
            "label": "15 mins",
            "description": "lorem ipsum dolar"
          },
          {
            "id": "Completed2",
            "title": "Title 2",
            "label": "15 mins",
            "description": "lorem ipsum dolar"
          }
        ]
      },
      {
        "id": "REPEAT",
        "title": "Act",
        "style": {
          "width": 280
        },
        "label": "1/1",
        "cards": [
          {
            "id": "Repeat1",
            "title": "Title 1",
            "label": "30 mins",
            "description": "lorem ipsum dolar"
          }
        ]
      },



    ]
  }


  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data))
  }, [])









  return (
    <div className="App">
      <Trello />
    </div>
  );
}

export default App;
