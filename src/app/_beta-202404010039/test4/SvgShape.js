import { atom, useAtom } from 'jotai';

const shapeAtom = atom({path: ""})

const pointsToPath = (points) =>  points.reduce((acc, point) => !acc ? `M ${point[0]} ${point[1]}` : `${acc} L ${point[0]} ${point[1]}`, null)

export const addShapeAtom = atom(
  null,
  (_get, set, update) => {
    set(shapeAtom, {path: pointsToPath(update)} )
  }
)

export const SvgShape = () => {
  const [shape] = useAtom(shapeAtom);

  return (
    <g>
      <path
        d={shape.path}
        fill="none"
        stroke="black"
        strokeWidth="3" 
      />
    </g>
  )

}