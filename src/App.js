import React from "react";
import MainSection from "./components/Main/MainSection";
import SideBarMain from "./components/SideBar/SideBarMain";
import Card from "./components/Card";
import ActivityBar from "./components/Activity/ActivityBar";

function App() {
  const tasks = [
    {
      id: 'e1',
      title: "TaskTitle...",
      description:
        "This is a good place to make descrption for ticket. We are glad to see you...",
      date: new Date(2022, 9, 8),
    },
    {
      id: 'e2',
      title: "TaskTitle...",
      description:
        "This is a good place to make descrption for ticket. We are glad to see you...",
      date: new Date(2023, 1, 4),
    },
    {
      id: 'e3',
      title: "TaskTitle...",
      description:
        "This is a good place to make descrption for ticket. We are glad to see you...",
      date: new Date(2021, 3, 5),
    },
  ];
  return (
    <Card>
      <SideBarMain/>
      <MainSection items={tasks}/>
      <ActivityBar/>
 
    </Card>
  );
}

export default App;
