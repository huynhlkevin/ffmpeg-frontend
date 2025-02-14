#ifndef CLIP_H
#define CLIP_H

#include "Timestamp.h"

#include <QString>
#include <QUrl>

class Clip
{
public:
    explicit Clip();

    const Timestamp& startTime() const { return m_startTime; }
    void setStartTime(const Timestamp& startTime);

    const Timestamp& endTime() const { return m_endTime; }
    void setEndTime(const Timestamp& endTime);

    const QUrl& url() const { return m_url; }
    void setUrl(const QUrl& url);

private:
    Timestamp m_startTime{};
    Timestamp m_endTime{};
    QUrl m_url{};
};

#endif // CLIP_H
