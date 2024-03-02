RideTime = 30;
RideDistance = 7;
CostPerMinute = [0.2, 0.35, 0.4, 0.45];
CostPerMile = [1.1, 1.8, 2.3, 3.5];

function solution(RideTime, RideDistance, CostPerMinute, CostPerMile)  {

    // Fórmula: (cost_per_minute) * (ride_time) + (cost_per_mile) * (ride_distance)
    // Cada índice del array representa un vehículo diferente.

    return CostPerMinute.map((costMinute, index) => {
        const costMile = CostPerMile[index]
        return costMinute * RideTime + costMile * RideDistance
    })
}