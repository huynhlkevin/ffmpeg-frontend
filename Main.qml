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

        VideoEncodingSettingsView {
            settings: root.videoEncodingSettings
        }

        AudioEncodingSettingsView {
            settings: root.audioEncodingSettings
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
