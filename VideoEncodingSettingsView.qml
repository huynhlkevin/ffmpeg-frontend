import QtQuick
import QtQuick.Controls
import QtQuick.Layouts

GroupBox {
    id: videoEncodingSettingsView

    required property VideoEncodingSettings settings

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
            model: videoEncodingSettingsView.settings.codecs
            onCurrentTextChanged: videoEncodingSettingsView.settings.codec = currentText
            Layout.fillWidth: true
        }

        Text {
            text: qsTr("Preset")
        }
        ComboBox {
            model: videoEncodingSettingsView.settings.presets
            onCurrentTextChanged: videoEncodingSettingsView.settings.preset = currentText
            Component.onCompleted: currentIndex = indexOfValue("medium")
            Layout.fillWidth: true
        }

        Text {
            text: qsTr("Quality") + " " + videoEncodingSettingsView.settings.quality
        }
        Slider {
            from: videoEncodingSettingsView.settings.minQuality
            to: videoEncodingSettingsView.settings.maxQuality
            value: videoEncodingSettingsView.settings.quality
            stepSize: 1
            onValueChanged: videoEncodingSettingsView.settings.quality = value
            Layout.fillWidth: true
        }
    }
}
