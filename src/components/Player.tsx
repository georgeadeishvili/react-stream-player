import React, { useRef, useEffect, useState } from 'react'
import './player.css'
import { PlayerProps } from './player.d'
import Play from './PlaySvg'
import Pause from './PauseSvg'
import Option from './OptionSvg'


import { getAudioChunks, getAudioFromPostId } from '../services';

let chunkIndex = 0
let stopped = false
let adder = 0

const Player = ({ width, height = 90, apiKey, postId, backgroundColor, color, options }: PlayerProps) => {

	const [rate, setRate] = useState(1);
	const [playBack, setPlayBack] = useState(1);

	const audioRef = useRef<HTMLAudioElement>(null)
	const playerRef = useRef<HTMLDivElement>(null)
	const lineRef = useRef<HTMLDivElement>(null)
	const timeRef = useRef<HTMLSpanElement>(null)
	const circleRef = useRef<HTMLDivElement>(null)
	const hoveredLine = useRef<HTMLDivElement>(null)
	const progressRef = useRef<HTMLDivElement>(null)
	const hoverTimeRef = useRef<HTMLDivElement>(null)


	const [isPlaying, setIsPlaying] = useState<boolean>(false);
	const [hovered, setHovered] = useState<boolean>(false);
	const [postData, setPostData] = useState<any>([]);
	const [audios, setAudios] = useState<any>([]);
	const [showOptions, setShowOptions] = useState<boolean>(false);

	useEffect(() => {
		getAudioFromPostId(postId).then(res => {
			setPostData(res.data);
		});
	}, [])

	useEffect(() => {
		audioRef.current!.playbackRate = rate;
	}, [rate]);

	useEffect(() => {
		if (postData.audios) {
			let audioArr: any = [];

			postData.audios.map((item: any, index: number) => {
				getAudioChunks(item.key).then(resp => {
					if (index == 0) {
						audioRef.current!.src = resp.data;
					}
					audioArr.push(resp.data);
				})
			});

			setAudios(audioArr)
		}
	}, [postData]);

	const handlePlayPauseClick = () => {
		audioRef.current!.playbackRate = rate;
		if (circleRef.current && postData) {
			circleRef.current.style.display = 'block'
		}

		if (isPlaying) {
			audioRef.current!.pause()
		} else {
			circleRef.current!.style.transition = 'all .25s linear'
			lineRef.current!.style.transition = 'all .25s linear'
			stopped = false
			audioRef.current!.play()
		}
		setIsPlaying(!isPlaying)
	}


	const handlePlayerClick = (e: any) => {
		circleRef.current!.style.transition = 'all .25s linear'
		lineRef.current!.style.transition = 'all .25s linear'
		let selectedFrame =
			(postData.length * (e.pageX - progressRef.current!.getBoundingClientRect().left)) /
			(progressRef.current!.getBoundingClientRect().width / 100) /
			100
		stopped = false
		

		
		const forAdder = selectedFrame;
        let i = 0
        while (true) {
            if (selectedFrame - postData.audios[i].duration > 0) {
                selectedFrame -= postData.audios[i].duration;
                i++;
            } else {
                break
            }
        }
		adder = forAdder - selectedFrame;
        chunkIndex = i;

		audioRef.current!.src = audios[chunkIndex];
		audioRef.current!.playbackRate = rate;
		audioRef.current!.currentTime = selectedFrame;
		audioRef.current!.play()


	}


	const handlePlayerHover = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		hoverTimeRef.current!.style.display = 'block'
		hoverTimeRef.current!.style.left = `calc(-50px + ${e.pageX - playerRef.current!.getBoundingClientRect().left}px)`
		hoverTimeRef.current!.innerText = calculateTime(
			(postData.length * (e.pageX - playerRef.current!.getBoundingClientRect().left)) /
			(playerRef.current!.getBoundingClientRect().width / 100) /
			100
		)

		hoveredLine.current!.style.width = `${e.pageX - progressRef.current!.getBoundingClientRect().left}px`
	}


	const handleHoverLeave = () => {
		hoverTimeRef.current!.style.display = 'none'
		hoveredLine.current!.style.width = '0px'
	}

	const calculateTime = (time: number) => {
		const hours = Math.floor(time / 3600)
		const minutes = Math.floor((time / 3600) % 60)
		const seconds = Math.floor(time % 60)
		if (hours) {
			return `${hours}:${minutes > 9 ? '' : '0'}${minutes}:${seconds > 9 ? '' : '0'}${seconds}`
		}
		return `${minutes > 9 ? '' : '0'}${minutes}:${seconds > 9 ? '' : '0'}${seconds}`
	}


	const chunkEnded = () => {

		if (chunkIndex < audios.length - 1) {
			audioRef.current!.src = audios[++chunkIndex]
			audioRef.current!.playbackRate = rate;
			adder += postData.audios[chunkIndex - 1].duration;
		} else {
			stopped = true;
			chunkIndex = 0;
			adder = 0;
			audioRef.current!.src = audios[chunkIndex];
			setIsPlaying(false);
		}
	}



	const setPlaybackRate = (direction: string) => {
		if (rate <= 0.5 && direction == 'down') {
			return;
		} else if (rate >= 2 && direction == 'up') {
			return;
		}
		if (direction == 'up') {
			setRate(rate + 0.25);
		} else {
			setRate(rate - 0.25);
		}
		setPlayBack(rate);
	}


	return (
		<div ref={playerRef} className='wt-rsp-container' style={{ height: height || 90, width: width || '100%', backgroundColor: backgroundColor || '#F8F7FE' }}>
			<button className='wt-rsp-play-pause' onClick={() => handlePlayPauseClick()} style={{ backgroundColor: color || '#7A68EE' }}>
				{isPlaying ? <Pause /> : <Play />}
			</button>
			<div className='wt-rsp-wrapper'>
				<div className='wt-rsp-header'>
					<h5>Listening article</h5>
					<h6>Powered by <span>wavetech.</span></h6>
				</div>
				<div className='wt-rsp-timer'>
					<span className='player-styled-span' ref={timeRef}>00:00</span>
				</div>
				<div className='wt-rsp-progress-wrapper'>
					<div className='w-100' onMouseMove={handlePlayerHover}
						onMouseLeave={handleHoverLeave}>

					
					<div className='wt-rsp-progress-background'
						onClick={handlePlayerClick}
					
						ref={progressRef}
						style={{ backgroundColor: color ? `${color}` : '#C6BEFB' }}>
						<div className='wt-rsp-progress-bar-hover' ref={hoveredLine} />
						<div className='wt-hover-duration' ref={hoverTimeRef}></div>
						<div ref={lineRef} className='wt-rsp-progress-bar' style={{ backgroundColor: color || '#7A68EE' }}>
							<div ref={circleRef} className='wt-rsp-progress-pin' style={{ backgroundColor: color || '#7A68EE' }}>
								<audio ref={audioRef}
									onCanPlay={(e) => {
										if (chunkIndex && !stopped) {
											e.currentTarget.play()
										}
									}}
									onTimeUpdate={() => {
										if (audios) {
											if (lineRef.current) {
												lineRef.current!.style.width = `${(100 / postData.length) * (adder + audioRef.current!.currentTime)
													}%`
											}
											timeRef.current!.innerHTML = `${calculateTime(adder + audioRef.current!.currentTime)}`

										}
									}}
									onEnded={chunkEnded}
								/>
							</div>
						</div>
					</div>
					</div>
					{options && <button onClick={() => setShowOptions(!showOptions)} className='wt-rsp-progress-option-btn'><Option /></button>}
				</div>
			</div>
			{options && showOptions && <div className='wt-rsp-option-wrapper' style={{ top: height > 89 ? `calc(${height}px + 10px)` : 'calc(100% + 10px)' }}>
				<p className='wt-control-title'>Speed Control</p>
				<div className='speed-control'>
					<button onClick={() => setPlaybackRate('down')}>-</button>
					<div className='speed-indicator'>{rate}x</div>
					<button onClick={() => setPlaybackRate('up')}>+</button>
				</div>
			</div>}
		</div>
	)
}

export default Player