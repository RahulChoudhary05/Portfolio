/*
  WEBGL IDENTITY FIELD — a wire icosahedron, point shell and two orbit rings
  that condense out of nothing, then drift with the pointer.
  Code-split from the main bundle (named imports keep three.js tree-shaken)
  and loaded by portfolioEffects on the first user interaction.
*/
import {
  BufferGeometry,
  EllipseCurve,
  Group,
  IcosahedronGeometry,
  LineBasicMaterial,
  LineLoop,
  LineSegments,
  PerspectiveCamera,
  Points,
  PointsMaterial,
  Scene,
  WebGLRenderer,
  WireframeGeometry,
} from "three"

const lerp = (a, b, t) => a + (b - a) * t
const clamp = (v, a, b) => Math.min(b, Math.max(a, v))

export default function heroField(cv, REDUCED) {
  let gl
  try {
    gl = new WebGLRenderer({ canvas: cv, antialias: true, alpha: true, powerPreference: "high-performance" })
  } catch (e) {
    return
  }

  const size = () => [cv.clientWidth || 480, cv.clientHeight || 480]
  let [W, H] = size()
  gl.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
  gl.setSize(W, H, false)

  const scene = new Scene()
  const cam = new PerspectiveCamera(40, W / H, 0.1, 120)
  cam.position.set(0, 0, 23)

  const grp = new Group()
  scene.add(grp)

  const R = 7.1
  const wireMat = new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
  grp.add(new LineSegments(new WireframeGeometry(new IcosahedronGeometry(R, 2)), wireMat))

  const ptMat = new PointsMaterial({
    color: 0xffffff, size: 0.058, sizeAttenuation: true,
    transparent: true, opacity: 0, depthWrite: false,
  })
  grp.add(new Points(new IcosahedronGeometry(R * 1.015, 4), ptMat))

  function ring(radius, rx, rz) {
    const pts = new EllipseCurve(0, 0, radius, radius, 0, Math.PI * 2).getPoints(160)
    const m = new LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0 })
    const l = new LineLoop(new BufferGeometry().setFromPoints(pts), m)
    l.rotation.x = rx
    l.rotation.z = rz
    grp.add(l)
    return m
  }
  const rings = [
    { m: ring(R * 1.46, Math.PI * 0.44, 0.22), t: 0.30 },
    { m: ring(R * 1.72, Math.PI * 0.40, -0.55), t: 0.16 },
  ]

  let mx = 0, my = 0, tx = 0, ty = 0
  const t0 = performance.now()
  window.addEventListener("mousemove", (e) => {
    tx = e.clientX / window.innerWidth - 0.5
    ty = e.clientY / window.innerHeight - 0.5
  }, { passive: true })

  function resize() {
    ;[W, H] = size()
    if (!W || !H) return
    cam.aspect = W / H
    cam.updateProjectionMatrix()
    gl.setSize(W, H, false)
  }
  window.addEventListener("resize", resize)
  if (window.ResizeObserver) { try { new ResizeObserver(resize).observe(cv) } catch (e) {} }
  resize()

  // Only render while the tab is visible and the canvas is on screen.
  let pageVisible = !document.hidden, onScreen = true
  document.addEventListener("visibilitychange", () => { pageVisible = !document.hidden })
  if ("IntersectionObserver" in window) {
    new IntersectionObserver((entries) => { onScreen = entries[0].isIntersecting }).observe(cv)
  }

  function frame(now) {
    requestAnimationFrame(frame)
    if (!pageVisible || !onScreen) return
    const el = (now - t0) / 1000
    const e = REDUCED ? 1 : clamp((el - 0.35) / 1.9, 0, 1)
    const ee = 1 - Math.pow(1 - e, 3)

    grp.scale.setScalar(0.62 + ee * 0.38)
    wireMat.opacity = 0.15 * ee
    ptMat.opacity = 0.46 * ee
    for (let i = 0; i < rings.length; i++) rings[i].m.opacity = rings[i].t * ee

    mx = lerp(mx, tx, 0.05)
    my = lerp(my, ty, 0.05)
    grp.rotation.y = (REDUCED ? 0 : el * 0.085) + mx * 0.55
    grp.rotation.x = -0.12 + my * 0.34
    cam.position.z = 23 - ee * 1.4
    gl.render(scene, cam)
  }
  requestAnimationFrame(frame)
}
