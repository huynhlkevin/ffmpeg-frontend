#ifndef TIMESTAMP_H
#define TIMESTAMP_H

struct Timestamp
{
    int hours{};
    int minutes{};
    int seconds{};
    int milliseconds{};
};

bool operator==(const Timestamp& t1, const Timestamp& t2);
bool operator!=(const Timestamp& t1, const Timestamp& t2);
bool operator>(const Timestamp& t1, const Timestamp& t2);
bool operator<(const Timestamp& t1, const Timestamp& t2);
bool operator>=(const Timestamp& t1, const Timestamp& t2);
bool operator<=(const Timestamp& t1, const Timestamp& t2);

#endif // TIMESTAMP_H
