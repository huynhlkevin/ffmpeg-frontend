#include "VideoEncodingSettings.h"

VideoEncodingSettings::VideoEncodingSettings(QObject *parent)
    : QObject{parent}
{

}

void VideoEncodingSettings::setCodec(const QString& codec)
{
    assert(m_codecs.contains(codec) && "Unknown video encoding codec");

    if (m_codec == codec)
    {
        return;
    }

    m_codec = codec;
    emit codecChanged(codec);
}

void VideoEncodingSettings::setPreset(const QString& preset)
{
    assert(m_presets.contains(preset) && "Unknown video encoding preset");

    if (m_preset == preset)
    {
        return;
    }

    m_preset = preset;
    emit presetChanged(preset);
}

void VideoEncodingSettings::setQuality(int quality)
{
    assert(quality >= minQuality() && "Too low quality value");
    assert(quality <= maxQuality() && "Too high quality value");

    if (m_quality == quality)
    {
        return;
    }

    m_quality = quality;
    emit qualityChanged(quality);
}
