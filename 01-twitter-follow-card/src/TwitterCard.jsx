import PropTypes from 'prop-types'
import { useMemo, useState } from 'react'

export function TwitterCard ({ userName, name, initialFollow }) {
  const [isFollowing, setIsFollowing] = useState(initialFollow)
  const [isHovering, setIsHovering] = useState(false)

  const followText = useMemo(() => {
    if (!isHovering) {
      return isFollowing ? 'Following' : 'Follow'
    }

    return isFollowing ? 'Unfollow' : 'Follow'
  }, [isHovering, isFollowing])

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const handleMouseEnter = () => {
    setIsHovering(true)
  }

  const handleMouseLeave = () => {
    setIsHovering(false)
  }

  return (
    <article className='flex justify-between items-center text-slate-200 text-sm'>
      <header className='flex items-center gap-2'>
        <img
          className='w-12 h-12 rounded-full'
          src={`https://unavatar.io/${userName}`}
          alt='user avatar'
        />
        <div className='flex flex-col'>
          <strong>{name}</strong>
          <span className='opacity-60'>@{userName}</span>
        </div>
      </header>

      <aside>
        <button
          className={`
            py-1 px-4 
            ml-6
            font-bold 
            border 
            rounded-full 
            transition-all ease-in-out duration-300
            ${isFollowing ? 'w-32 bg-transparent text-white  hover:bg-red-600/20 hover:text-red-500 hover:border-red-500' : 'bg-white text-black hover:bg-opacity-80'}
            `}
          onClick={handleClick}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span>{followText}</span>
        </button>
      </aside>
    </article>
  )
}

TwitterCard.propTypes = {
  userName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  initialFollow: PropTypes.bool
}
