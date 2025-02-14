#include "Clip.h"

Clip::Clip()
{

}

void Clip::setStartTime(const Timestamp& startTime)
{
    if (startTime < m_endTime)
    {
        m_startTime = startTime;
    }
}

void Clip::setEndTime(const Timestamp& endTime)
{
    if (endTime > m_startTime)
    {
        m_endTime = endTime;
    }
}

void Clip::setUrl(const QUrl& url)
{
    m_url = url;
}
