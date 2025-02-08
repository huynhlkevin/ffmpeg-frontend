#ifndef AUDIOENCODINGSETTINGS_H
#define AUDIOENCODINGSETTINGS_H

#include <QObject>
#include <QQmlEngine>

class AudioEncodingSettings : public QObject
{
    Q_OBJECT
    QML_ELEMENT
    QML_UNCREATABLE("")

    Q_PROPERTY(QStringList codecs READ codecs CONSTANT FINAL)
    Q_PROPERTY(QString codec READ codec WRITE setCodec NOTIFY codecChanged FINAL)

public:
    explicit AudioEncodingSettings(QObject* parent = nullptr);

    const QStringList& codecs() const { return m_codecs; }
    const QString& codec() const { return m_codec; }
    void setCodec(const QString& codec);

signals:
    void codecChanged(const QString& codec);

private:
    const QStringList m_codecs{ "libopus", "flac" };
    QString m_codec{ "libopus" };
};

#endif // AUDIOENCODINGSETTINGS_H
