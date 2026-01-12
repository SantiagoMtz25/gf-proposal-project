import type { CSSProperties } from "react"
import Flower from "./flower"
import "./flower.css"

const FlowerSides = () => {
  const flowers: CSSProperties[] = [
    { top: "12%", left: "24%", animationDelay: "0.1s" },
    { top: "32%", left: "9%", animationDelay: "0.25s" },
    { top: "58%", left: "13%", animationDelay: "0.4s" },
    { top: "82%", left: "21%", animationDelay: "0.55s" },
    { top: "18%", right: "14%", animationDelay: "0.18s" },
    { top: "40%", right: "0%", animationDelay: "0.32s" },
    { top: "64%", right: "5%", animationDelay: "0.48s" },
    { top: "86%", right: "18%", animationDelay: "0.6s" },
  ]

  return (
    <>
      {flowers.map((style, index) => (
        <div
          key={`flower-${index}`}
          className="flower-wrap"
          style={style}
          aria-hidden="true"
        >
          <Flower />
        </div>
      ))}
    </>
  )
}

export default FlowerSides
