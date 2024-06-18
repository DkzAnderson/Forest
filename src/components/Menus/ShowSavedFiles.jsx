import React from 'react'

export const ShowSavedFiles = ({files}) => {
    const styles = {
        main : 'flex flex-col w-96 max-h-20 px-10 py-2 overflow-auto list-decimal',
        li   : 'w-full text-center text-white'
    }

  return (
    <ul className={styles.main}>
        {
            files.map (file=>{
                return(
                    <li className={styles.li} >
                        {file.name}
                    </li>
                )
            })
        }
    </ul>
  )
}
