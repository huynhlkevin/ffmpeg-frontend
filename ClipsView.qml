import QtQuick
import QtQuick.Controls
import QtQuick.Dialogs
import QtQuick.Layouts

GroupBox {
    id: clipsView

    required property Clips clips

    title: qsTr("Clips")
    Layout.fillWidth: true
    Layout.fillHeight: true

    ColumnLayout {
        anchors.fill: parent

        Button {
            text: qsTr("Create Clip")
            onClicked: clipsView.clips.insertRows(clipsView.clips.rowCount(), 1)
            Layout.fillWidth: true
        }

        ScrollView {
            Layout.fillHeight: true
            Layout.fillWidth: true
            clip: true

            ListView {
                anchors.fill: parent
                model: clipsView.clips
                delegate: GroupBox {
                    title: qsTr("Clip") + " " + index

                    GridLayout {
                        columns: 2
                        anchors.fill: parent

                        Button {
                            text: qsTr("Select File")
                            onClicked: selectFileDialog.open()
                        }
                        FileDialog {
                            id: selectFileDialog
                            onAccepted: url = selectedFile
                        }
                        Text {
                            Layout.fillWidth: true
                            text: url
                        }

                        Text {
                            text: qsTr("Start Time")
                            Layout.preferredWidth: 75
                        }
                        RowLayout {
                            SpinBox {
                                to: 999
                                value: startTimeHours
                                onValueChanged: startTimeHours = value
                            }
                            Text {
                                text: "h"
                            }

                            SpinBox {
                                to: 999
                                value: startTimeMinutes
                                onValueChanged: startTimeMinutes = value
                            }
                            Text {
                                text: "m"
                            }

                            SpinBox {
                                to: 999
                                value: startTimeSeconds
                                onValueChanged: startTimeSeconds = value
                            }
                            Text {
                                text: "s"
                            }

                            SpinBox {
                                to: 999
                                value: startTimeMilliseconds
                                onValueChanged: startTimeMilliseconds = value
                            }
                            Text {
                                text: "ms"
                            }
                        }

                        Text {
                            text: qsTr("End Time")
                            Layout.preferredWidth: 75
                        }
                        RowLayout {
                            SpinBox {
                                to: 999
                                value: endTimeHours
                                onValueChanged: endTimeHours = value
                            }
                            Text {
                                text: "h"
                            }

                            SpinBox {
                                to: 999
                                value: endTimeMinutes
                                onValueChanged: endTimeMinutes = value
                            }
                            Text {
                                text: "m"
                            }

                            SpinBox {
                                to: 999
                                value: endTimeSeconds
                                onValueChanged: endTimeSeconds = value
                            }
                            Text {
                                text: "s"
                            }

                            SpinBox {
                                to: 999
                                value: endTimeMilliseconds
                                onValueChanged: endTimeMilliseconds = value
                            }
                            Text {
                                text: "ms"
                            }
                        }

                        Button {
                            text: qsTr("Delete")
                            onClicked: clipsView.clips.removeRows(index, 1)
                            Layout.columnSpan: 2
                            Layout.fillWidth: true
                        }
                    }
                }
            }
        }
    }
}
