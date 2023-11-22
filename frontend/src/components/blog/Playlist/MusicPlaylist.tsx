import styles from './MusicPlaylist.module.scss'

export const MusicPlaylist = ({ string }) => {
    return (
        <div className={styles.playlist__wrapper}>
            <div className={styles.playlist__cd}></div>
            <div className={styles.playlist}>
            {string.map((song) => {
                return (
                    <div className={styles.playlist__song}>
                        <div className={styles.playlist__song__title}>
                            <p>{song}</p>
                        </div>
                    </div>
                );
            }
            )}
            </div>
        </div>
    );
}
