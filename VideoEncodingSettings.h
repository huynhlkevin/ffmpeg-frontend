#ifndef VIDEOENCODINGSETTINGS_H
#define VIDEOENCODINGSETTINGS_H

#include <QObject>
#include <QQmlEngine>

class VideoEncodingSettings : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    QML_UNCREATABLE("")

    Q_PROPERTY(QStringList codecs READ codecs CONSTANT FINAL)
    Q_PROPERTY(QString codec READ codec WRITE setCodec NOTIFY codecChanged FINAL)

    Q_PROPERTY(QStringList presets READ presets CONSTANT FINAL)
    Q_PROPERTY(QString preset READ preset WRITE setPreset NOTIFY presetChanged FINAL)

    Q_PROPERTY(int quality READ quality WRITE setQuality NOTIFY qualityChanged FINAL)
    Q_PROPERTY(int maxQuality READ maxQuality CONSTANT FINAL)
    Q_PROPERTY(int minQuality READ minQuality CONSTANT FINAL)

public:
    explicit VideoEncodingSettings(QObject* parent = nullptr);

    const QStringList& codecs() const { return m_codecs; }
    const QString& codec() const { return m_codec; }
    void setCodec(const QString& codec);

    const QStringList& presets() const { return m_presets; }
    const QString& preset() const { return m_preset; }
    void setPreset(const QString& preset);

    int quality() const { return m_quality; }
    void setQuality(int quality);

    constexpr int maxQuality() const { return 51; }
    constexpr int minQuality() const { return 0; }

signals:
    void codecChanged(const QString& codec);
    void presetChanged(const QString& preset);
    void qualityChanged(int quality);

private:
    const QStringList m_codecs{ "libx264" };
    QString m_codec{ "libx264" };

    const QStringList m_presets{
        "ultrafast", "superfast", "veryfast", "fast",
        "medium",
        "slow", "slower", "veryslow"
    };
    QString m_preset{ "medium" };

    int m_quality{ 23 };
};

#endif // VIDEOENCODINGSETTINGS_H
