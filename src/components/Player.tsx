import { useRef, useEffect } from 'react'
import './player.css'
import { PlayerProps } from './player.d'
import Play from './PlaySvg'
import Pause from './PauseSvg'
import Option from './OptionSvg'

let chunkIndex = 0
let stopped = false

const Player = ({ width, height = 90, backgroundColor, color, options, src = [] }: PlayerProps) => {
	const audioRef = useRef<HTMLAudioElement>(null)
	const lineRef = useRef<HTMLDivElement>(null)
	const timeRef = useRef<HTMLSpanElement>(null)

	useEffect(() => {
		if (audioRef.current && src.length > 0) {
			audioRef.current.src = src[0]
		}
	}, [])
	return (
		<div className='wt-rsp-container' style={{ height: height || 90, width: width || '100%', backgroundColor: backgroundColor || '#F8F7FE'}}>
			<button className='wt-rsp-play-pause' style={{ backgroundColor: color || '#7A68EE'}}><Play /></button>
			<div className='wt-rsp-wrapper'>
				<div className='wt-rsp-header'>
					<h5>Listening article</h5>
					<h6>Powered by <span>wavetech.</span></h6>
				</div>
				<div className='wt-rsp-timer'>
					<span ref={timeRef}>0:58</span>/18:44
				</div>
				<div className='wt-rsp-progress-wrapper'>
					<div className='wt-rsp-progress-background' style={{ backgroundColor: color ? `${color}` : '#C6BEFB'}}>
						<div ref={lineRef} className='wt-rsp-progress-bar' style={{ backgroundColor: color || '#7A68EE'}}>
							<div className='wt-rsp-progress-pin' style={{ backgroundColor: color || '#7A68EE'}}>
								<audio ref={audioRef} onCanPlay={(e) => {
									if (chunkIndex && !stopped) {
										e.currentTarget.play()
									}
								}} onTimeUpdate={(e) => console.log('timeupdate')} />
							</div>
						</div>
					</div>
					{options && <button className='wt-rsp-progress-option-btn'><Option /></button>}
				</div>
			</div>
			{options && <div className='wt-rsp-option-wrapper' style={{ top: height > 89 ? `calc(${height}px + 10px)` : 'calc(100% + 10px)'}}>
				<p>Pitch control</p>
				<div></div>
				<p>Speed Control</p>
				<div>
					<div>-</div>
					<div>2x</div>
					<div>+</div>
				</div>
			</div>}
		</div>
	)
}

export default Player