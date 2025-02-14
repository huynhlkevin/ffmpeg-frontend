#include "Clips.h"

Clips::Clips(QObject* parent)
    : QAbstractListModel{parent}
{

}

QVariant Clips::data(const QModelIndex& index, int role) const
{
    if (!index.isValid())
    {
        return QVariant{};
    }

    const auto& clip = m_clips[index.row()];
    switch (role)
    {
    case startTimeHoursRole:
        return clip.startTime().hours;
    case startTimeMinutesRole:
        return clip.startTime().minutes;
    case startTimeSecondsRole:
        return clip.startTime().seconds;
    case startTimeMillisecondsRole:
        return clip.startTime().milliseconds;
    case endTimeHoursRole:
        return clip.endTime().hours;
    case endTimeMinutesRole:
        return clip.endTime().minutes;
    case endTimeSecondsRole:
        return clip.endTime().seconds;
    case endTimeMillisecondsRole:
        return clip.endTime().milliseconds;
    case urlRole:
        return clip.url();
    }

    assert(false && "Unknown Qt role");
    return QVariant{};
}

bool Clips::insertRows(int row, int count, const QModelIndex& parent)
{
    assert(row >= 0 && "Invalid row value for insertRows");
    assert(count >= 1 && "Invalid count value for insertRows");

    // this implementation only appends to the end of the list
    // subtract 1 to add the correct number of rows
    beginInsertRows(parent, row, row + count - 1);

    for (int i{ 0 }; i < count; ++i)
    {
        m_clips.push_back(Clip{});
    }

    endInsertRows();
    return true;
}

bool Clips::removeRows(int row, int count, const QModelIndex& parent)
{
    assert(row >= 0 && "Invalid row value for removeRows");
    assert(count >= 1 && "Invalid count value for removeRows");

    // subtract 1 to remove the correct number of rows
    beginRemoveRows(parent, row, row + count - 1);

    for (int i{ 0 }; m_clips.size() > row && i < count; ++i)
    {
        m_clips.removeAt(row);
    }

    endRemoveRows();
    return true;
}

QHash<int, QByteArray> Clips::roleNames() const
{
    return QHash<int, QByteArray> {
        { startTimeHoursRole, "startTimeHours" },
        { startTimeMinutesRole, "startTimeMinutes" },
        { startTimeSecondsRole, "startTimeSeconds" },
        { startTimeMillisecondsRole, "startTimeMilliseconds" },
        { endTimeHoursRole, "endTimeHours" },
        { endTimeMinutesRole, "endTimeMinutes" },
        { endTimeSecondsRole, "endTimeSeconds" },
        { endTimeMillisecondsRole, "endTimeMilliseconds" },
        { urlRole, "url" },
    };
}

int Clips::rowCount(const QModelIndex& parent) const
{
    return m_clips.size();
}

bool Clips::setData(const QModelIndex& index, const QVariant& value, int role)
{
    if (!index.isValid())
    {
        return false;
    }

    auto& clip = m_clips[index.row()];
    switch (role)
    {
    case startTimeHoursRole:
        clip.setStartTime(Timestamp{
            value.toInt(),
            clip.startTime().minutes,
            clip.startTime().seconds,
            clip.startTime().milliseconds,
        });
        break;
    case startTimeMinutesRole:
        clip.setStartTime(Timestamp{
            clip.startTime().hours,
            value.toInt(),
            clip.startTime().seconds,
            clip.startTime().milliseconds,
        });
        break;
    case startTimeSecondsRole:
        clip.setStartTime(Timestamp{
            clip.startTime().hours,
            clip.startTime().minutes,
            value.toInt(),
            clip.startTime().milliseconds,
        });
        break;
    case startTimeMillisecondsRole:
        clip.setStartTime(Timestamp{
            clip.startTime().hours,
            clip.startTime().minutes,
            clip.startTime().seconds,
            value.toInt(),
        });
        break;
    case endTimeHoursRole:
        clip.setEndTime(Timestamp{
            value.toInt(),
            clip.endTime().minutes,
            clip.endTime().seconds,
            clip.endTime().milliseconds,
        });
        break;
    case endTimeMinutesRole:
        clip.setEndTime(Timestamp{
            clip.endTime().hours,
            value.toInt(),
            clip.endTime().seconds,
            clip.endTime().milliseconds,
        });
        break;
    case endTimeSecondsRole:
        clip.setEndTime(Timestamp{
            clip.endTime().hours,
            clip.endTime().minutes,
            value.toInt(),
            clip.endTime().milliseconds,
        });
        break;
    case endTimeMillisecondsRole:
        clip.setEndTime(Timestamp{
            clip.endTime().hours,
            clip.endTime().minutes,
            clip.endTime().seconds,
            value.toInt(),
        });
        break;
    case urlRole:
        clip.setUrl(value.toUrl());
        break;
    default:
        assert(false && "Unknown Qt role");
        return false;
    }

    return true;
}

Qt::ItemFlags Clips::flags(const QModelIndex& index) const
{
    return Qt::ItemIsEditable;
}
