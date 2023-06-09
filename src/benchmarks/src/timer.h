#ifndef timer_h
#define timer_h
#include <chrono>
class Timer
{
public:
    Timer();
    double Stop();
private:
    std::chrono::time_point<std::chrono::high_resolution_clock> m_StartTimepoint;
};
#endif