#ifndef CLIPS_H
#define CLIPS_H

#include "Clip.h"

#include <QAbstractListModel>
#include <QQmlEngine>

class Clips : public QAbstractListModel
{
    Q_OBJECT
    QML_ELEMENT
    QML_UNCREATABLE("")

public:
    enum QtRole
    {
        // start at 0x0100 for application-specific roles
        // https://doc.qt.io/qt-6/qt.html#ItemDataRole-enum
        startTimeHoursRole = 0x0100,
        startTimeMinutesRole,
        startTimeSecondsRole,
        startTimeMillisecondsRole,
        endTimeHoursRole,
        endTimeMinutesRole,
        endTimeSecondsRole,
        endTimeMillisecondsRole,
        urlRole,
    };

    explicit Clips(QObject* parent = nullptr);

    QVariant data(const QModelIndex& index, int role = Qt::DisplayRole) const override;
    bool insertRows(int row, int count, const QModelIndex& parent = QModelIndex()) override;
    bool removeRows(int row, int count, const QModelIndex& parent = QModelIndex()) override;
    QHash<int, QByteArray> roleNames() const override;
    int rowCount(const QModelIndex& parent = QModelIndex()) const override;
    bool setData(const QModelIndex& index, const QVariant& value, int role = Qt::EditRole);
    Qt::ItemFlags flags(const QModelIndex& index) const override;

private:
    QList<Clip> m_clips{};
};

#endif // CLIPS_H
