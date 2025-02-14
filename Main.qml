import QtQuick
import QtQuick.Controls
import QtQuick.Dialogs
import QtQuick.Layouts

ApplicationWindow {
    id: root

    required property AudioEncodingSettings audioEncodingSettings
    required property VideoEncodingSettings videoEncodingSettings
    required property Clips clips

    width: 600
    height: 600
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
                columns: 2
                anchors.fill: parent

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

        GroupBox {
            title: qsTr("Audio Encoding Settings")
            Layout.fillWidth: true

            GridLayout {
                columns: 2
                anchors.fill: parent

                Text {
                    text: qsTr("Codec")
                    Layout.preferredWidth: 75
                }
                ComboBox {
                    model: root.audioEncodingSettings.codecs
                    onCurrentTextChanged: root.audioEncodingSettings.codec = currentText
                    Layout.fillWidth: true
                }
            }
        }

        ClipsView {
            clips: root.clips
        }

        Button {
            text: qsTr("Submit")
            Layout.fillWidth: true
        }
    }
}
