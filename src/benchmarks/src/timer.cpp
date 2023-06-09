#include "timer.h"
#include <chrono>

Timer::Timer()
{
    m_StartTimepoint = std::chrono::high_resolution_clock::now();
}

double Timer::Stop()
{
    auto endTimepoint = std::chrono::high_resolution_clock::now();
    auto start = std::chrono::time_point_cast<std::chrono::microseconds>(m_StartTimepoint).time_since_epoch().count();
    auto end = std::chrono::time_point_cast<std::chrono::microseconds>(endTimepoint).time_since_epoch().count();
    auto duration = end - start;
    double ms = duration * 0.001;
    return ms;
}
