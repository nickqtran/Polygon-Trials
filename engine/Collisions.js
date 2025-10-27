class Collisions {
  static inCollision(a, b) {
    const polyA = a.getComponent(Polygon)
    const polyB = b.getComponent(Polygon)

    // Polygon and Polygon Collision, use SAT
    if (polyA && polyB) {
      const worldPointsA = polyA.points.map(p => new Vector2(
        p.x * a.transform.scale.x + a.transform.position.x,
        p.y * a.transform.scale.y + a.transform.position.y
      ))
      const worldPointsB = polyB.points.map(p => new Vector2(
        p.x * b.transform.scale.x + b.transform.position.x,
        p.y * b.transform.scale.y + b.transform.position.y
      ))

      const lines = []
      for (const points of [worldPointsA, worldPointsB]) {
        for (let i = 0; i < points.length; i++) {
          const a = points[i]
          const b = points[(i + 1) % points.length]
          lines.push(new Vector2(a.y - b.y, b.x - a.x)) // orthogonal
        }
      }

      for (const line of lines) {
        const aDots = worldPointsA.map(p => p.x * line.x + p.y * line.y)
        const bDots = worldPointsB.map(p => p.x * line.x + p.y * line.y)
        if (Math.max(...aDots) < Math.min(...bDots) || Math.max(...bDots) < Math.min(...aDots))
          return false
      }
      return true
    }

    // Polygon and Circle Collision
    const circle = polyA ? b : a
    const polygon = polyA ? a : b
    const circlePos = circle.transform.position
    const radius = circle.size || 20 // use your asteroid.size property

    // Approximate circle collision: check distance from polygon center
    const polyPos = polygon.transform.position
    const dx = circlePos.x - polyPos.x
    const dy = circlePos.y - polyPos.y
    const distance = Math.sqrt(dx * dx + dy * dy)
    return distance < radius + 20 // 20 = approximate polygon radius
  }
}
