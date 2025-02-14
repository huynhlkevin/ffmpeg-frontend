#include "AudioEncodingSettings.h"
#include "VideoEncodingSettings.h"
#include "Clips.h"

#include <QGuiApplication>
#include <QQmlApplicationEngine>

int main(int argc, char* argv[])
{
    QGuiApplication app{ argc, argv };

    QQmlApplicationEngine engine{};

    QObject::connect(&engine, &QQmlApplicationEngine::objectCreationFailed,
                     &app, []() { QCoreApplication::exit(-1); },
    Qt::QueuedConnection);

    const AudioEncodingSettings audioEncodingSettings{};
    const VideoEncodingSettings videoEncodingSettings{};
    const Clips clips{};
    engine.setInitialProperties({
        { "audioEncodingSettings", QVariant::fromValue(&audioEncodingSettings) },
        { "videoEncodingSettings", QVariant::fromValue(&videoEncodingSettings) },
        { "clips", QVariant::fromValue(&clips) }
    });

    engine.loadFromModule("ffmpeg_frontend", "Main");

    return app.exec();
}
