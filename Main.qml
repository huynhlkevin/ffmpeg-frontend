import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

ApplicationWindow {
    id: root

    required property VideoEncodingSettings videoEncodingSettings

    width: 640
    height: 480
    visible: true
    title: qsTr("FFmpeg")

    menuBar: MenuBar {
        Menu {
            title: qsTr("&File")
            Action {
                text: qsTr("&Quit")
                onTriggered: root.close()
            }
        }
    }

    ColumnLayout {
        anchors.fill: parent

        GroupBox {
            title: qsTr("Video Encoding Settings")
            Layout.fillWidth: true

            GridLayout {
                anchors.fill: parent
                columns: 2

                Text {
                    text: qsTr("Codec")
                    Layout.preferredWidth: 75
                }
                ComboBox {
                    model: root.videoEncodingSettings.codecs
                    onCurrentTextChanged: root.videoEncodingSettings.codec = currentText
                    Layout.fillWidth: true
                }

                Text {
                    text: qsTr("Preset")
                }
                ComboBox {
                    model: root.videoEncodingSettings.presets
                    onCurrentTextChanged: root.videoEncodingSettings.preset = currentText
                    Component.onCompleted: currentIndex = indexOfValue("medium")
                    Layout.fillWidth: true
                }

                Text {
                    text: qsTr("Quality") + " " + root.videoEncodingSettings.quality
                }
                Slider {
                    from: root.videoEncodingSettings.minQuality
                    to: root.videoEncodingSettings.maxQuality
                    value: root.videoEncodingSettings.quality
                    stepSize: 1
                    onValueChanged: root.videoEncodingSettings.quality = value
                    Layout.fillWidth: true
                }
            }
        }

        Button {
            text: qsTr("Submit")
            Layout.fillWidth: true
        }
    }
}
