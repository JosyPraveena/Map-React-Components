import React from "react";
import "./styles.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import MyMap from "./MyMap";

class Tabpart extends React.Component {
  render() {
    const myTabs = (
      <Tabs>
        <TabList>
          <Tab>My Homeland</Tab>
          <Tab>My current place</Tab>
        </TabList>

        <TabPanel>
          <MyMap position={[13.0827, 80.2707]} zoom={7} />
        </TabPanel>
        <TabPanel>
          <MyMap position={[52.52, 13.405]} zoom={7} />
        </TabPanel>
      </Tabs>
    );
    return (
      <div>
        <h1>{this.props.name}</h1>
        {myTabs}
      </div>
    );
  }
}

export default Tabpart;
