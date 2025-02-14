#include "Timestamp.h"

bool operator==(const Timestamp& t1, const Timestamp& t2)
{
    return t1.hours == t2.hours
        && t1.minutes == t2.minutes
        && t1.seconds == t1.seconds
        && t1.milliseconds == t1.milliseconds;
}

bool operator!=(const Timestamp& t1, const Timestamp& t2)
{
    return !(t1 == t2);
}

bool operator>(const Timestamp& t1, const Timestamp& t2)
{
    if (t1.hours != t2.hours)
    {
        return t1.hours > t2.hours;
    }

    if (t1.minutes != t2.minutes)
    {
        return t1.minutes > t2.minutes;
    }

    if (t1.seconds != t2.seconds)
    {
        return t1.seconds > t2.seconds;
    }

    if (t1.milliseconds != t2.milliseconds)
    {
        return t1.milliseconds > t2.milliseconds;
    }

    return false;
}

bool operator<(const Timestamp& t1, const Timestamp& t2)
{
    return t2 > t1;
}

bool operator>=(const Timestamp& t1, const Timestamp& t2)
{
    return !(t1 < t2);
}

bool operator<=(const Timestamp& t1, const Timestamp& t2)
{
    return !(t1 > t2);
}
