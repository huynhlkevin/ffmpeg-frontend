#include "VideoEncodingSettings.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>

int main(int argc, char *argv[])
{
    QGuiApplication app{ argc, argv };

    QQmlApplicationEngine engine{};

    QObject::connect(&engine, &QQmlApplicationEngine::objectCreationFailed,
                     &app, []() { QCoreApplication::exit(-1); },
    Qt::QueuedConnection);

    const VideoEncodingSettings videoEncodingSettings{};
    engine.setInitialProperties({
        { "videoEncodingSettings", QVariant::fromValue(&videoEncodingSettings) }
    });

    engine.loadFromModule("ffmpeg_frontend", "Main");

    return app.exec();
}
