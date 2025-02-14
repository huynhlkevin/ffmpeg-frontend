import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

GroupBox {
    id: audioEncodingSettingsView

    required property AudioEncodingSettings settings

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
            model: audioEncodingSettingsView.settings.codecs
            onCurrentTextChanged: audioEncodingSettingsView.settings.codec = currentText
            Layout.fillWidth: true
        }
    }
}
