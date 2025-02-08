#include "AudioEncodingSettings.h"

AudioEncodingSettings::AudioEncodingSettings(QObject* parent)
    : QObject{ parent }
{

}

void AudioEncodingSettings::setCodec(const QString& codec)
{
    assert(m_codecs.contains(codec) && "Unknown audio encoding codec");

    if (m_codec == codec)
    {
        return;
    }

    m_codec = codec;
    emit codecChanged(codec);
}
