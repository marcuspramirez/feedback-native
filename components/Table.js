import React, { Component } from "react";
import { StyleSheet, View, ScrollView } from "react-native";
import { Table, TableWrapper, Row } from "react-native-table-component";

export default class EmployeeTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: [
        "First Name",
        "Last Name",
        "Department",
        "Positives",
        "Opportunities",
        "Other Notes",
      ],
      widthArr: [90, 90, 90, 90, 90, 120],
    };
  }

  render() {
    const state = this.state;
    const data = [];
    for (let i = 0; i < 5; i += 1) {
      const dataRow = [];
      for (let j = 0; j < 9; j += 1) {
        dataRow.push(`${i}${j}`);
      }
      data.push(dataRow);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderColor: "#C1C0B9" }}>
              <Row
                data={state.tableHead}
                widthArr={state.widthArr}
                style={styles.head}
                textStyle={styles.text}
              />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderColor: "#C1C0B9" }}>
                {data.map((dataRow, index) => (
                  <Row
                    key={index}
                    data={dataRow}
                    widthArr={state.widthArr}
                    style={[
                      styles.row,
                      index % 2 && { backgroundColor: "#ffffff" },
                    ]}
                    textStyle={styles.text}
                  />
                ))}
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#ffffff",
  },
  head: {
    height: 50,
    backgroundColor: "#6F7BD9",
  },
  text: {
    textAlign: "center",
    fontWeight: "200",
  },
  dataWrapper: {
    marginTop: -1,
  },
  row: {
    height: 40,
    backgroundColor: "#F7F8FA",
  },
});
