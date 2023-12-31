import styles from './animatedBackground.module.css'

export const calculateStarsForTheScreen = () => {
    const starWidth = 13 // 13px
    const starsCount = Math.floor(window.screen.width / starWidth) - 28

    return starsCount
}

const frames = 2

export const AnimatedBackground = () => {
    const starsCount = calculateStarsForTheScreen()

    return (
        Array(frames).fill(null).map((_, frameIndex) => (
            <div
                key={frameIndex}
                className={
                    styles["animatedBackground__container"]
                }
                style={{
                    zIndex: -frameIndex
                }}
            >
                <div className={styles["animatedBackground__wrapper"]}>
                    {
                        Array(starsCount)
                            .fill(null)
                            .map((_, index) => {
                                const animationDelay = Math.random() * 80 + 1
                                const animationTime = Math.random() * 20 + 5
                                let scale = 1

                                if (frameIndex === 0) {
                                    scale = Math.random() + 0.4
                                }
                                if (frameIndex === 1) {
                                    scale = Math.floor(Math.random() * 10 + 1)
                                }

                                console.log(scale)
                                return (
                                    <span
                                        name='elemenr'
                                        key={`${frameIndex} + ${index}`}
                                        style={{
                                            // @ts-ignore This isn't wrong
                                            "--animation-delay": animationDelay + "s",
                                            "--animation-time": animationTime + "s",
                                            '--scale': scale
                                        }}
                                        className={styles["animatedBackground__star-container"]}
                                    >
                                        <div className={styles["animatedBackground__star"]} />
                                    </span>
                                )
                            })
                    }
                </div>
            </div>
        ))
    )
}
