import Skeleton ,  { SkeletonTheme } from "react-loading-skeleton"
 
const CardSkeleton = ({cards}) => {
  return Array(cards)
    .fill(0)
    .map((item,i) => (
        <div key={i} className="card-skeleton w-[25rem] h-[27rem] m-2 p-3 border-2 border-white rounded-2xl cursor-pointer">
            <SkeletonTheme>
                <Skeleton className="w-[24rem] h-[17rem] mt-[0.5rem] mb-[0.5rem]" />
                <Skeleton count={3} className="h-[1.5rem] mb-[0.5rem]" />
            </SkeletonTheme>
        </div>
    ));
}

export default CardSkeleton;
