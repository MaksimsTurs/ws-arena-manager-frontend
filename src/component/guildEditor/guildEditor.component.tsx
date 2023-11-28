import scss from './guildEditor.module.scss'

import TextInput from '../inputs/textInput/textInput.component'
import NotificationBox from '../notificationBox/notificationBox.component'

import { useForm, SubmitHandler } from 'react-hook-form'
import { Fragment } from 'react'

import { AppDispatch, RootState } from '@/store/store'
import { Guild, GuildInitialState } from '@/store/guild/guild.type'
import { useDispatch, useSelector } from 'react-redux'

import guildBuff from '@/store/guild/guildBuff'
import paramIconSrc from '@/window/paramIconSrc'

import { changeGuildBuff, createGuild } from '@/store/guild/guild.slice'

import handlePercentageParams from '@/utils/handlePercentageParams.util'

const GuildEditor = () => {
	const dispatch = useDispatch<AppDispatch>()

	const { guild } = useSelector<RootState, GuildInitialState>(state => state.guildSlice)

	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<Guild>({ defaultValues: { lvl: guild?.lvl || 1 } })

	const createNewGuild: SubmitHandler<Guild> = ({ lvl, name }) =>	dispatch(createGuild({ lvl: Number(lvl), name }))

	const validateGuildName = (value: string) => value.length <= 0 ? 'Name is to Short!' : undefined

	const guildIsNull: boolean = guild ? false : true

	return (
		<Fragment>
			<NotificationBox
				isVisible={errors.name?.message ? true : false}
				texts={errors.name?.message}
				type='error'
			/>
			<form
				onSubmit={handleSubmit(createNewGuild)}
				className={scss.guild_editor_container}>
				<div className={scss.guild_editor_basic_data}>
					<TextInput
						inputLabel='Guild Name!'
						placeholder='Write you guild name...'
						inputName='name'
						type='text'
						register={register}
						defaultValue={guild?.name}
						validation={validateGuildName}	
					/>
					<TextInput
						inputLabel='Guild LVL!'
						inputName='lvl'
						type='number'
						defaultValue={guild?.lvl}
						max={12}
						register={register}
					/>
				</div>
				<div className={scss.guild_editor_buff_data_container}>
					{guildBuff.map(buffData => (
						<div
							className={scss.guild_editor_buff_container}
							key={buffData.guildBuffName}>
							<img src={paramIconSrc[buffData.guildBuffName]} />
							<div className={scss.guild_editor_buff_body}>
								{buffData.guildBuffs.map(buffLVLs => {
									const buffLVLsEntries = Object.entries(buffLVLs)
									let buffPerLVL: {
										buffName: string
										buffLVL: string
										buffPercent: number
									}[] = []

									for (let [buffKey, buffValue] of buffLVLsEntries) {
										buffPerLVL = [
											...buffPerLVL,
											{
												buffName: buffValue.buffNames[0],
												buffLVL: buffKey,
												buffPercent: buffValue.buffPercentages[0],
											},
										]
									}

									return (
										<Fragment key={buffData.guildBuffName}>
											<div className={scss.guild_buff_information_container}>
												<p className={scss.guild_buff_information_name}>
													{buffData.guildBuffName}
												</p>
												{buffPerLVL.map(buffLVLData => (
													<div key={buffLVLData.buffLVL}>
														<p>LVL {buffLVLData.buffLVL}:</p>
														<p>+ {handlePercentageParams(buffLVLData.buffName, buffLVLData.buffPercent)}</p>
													</div>
												))}
											</div>
											{Object.entries(buffLVLs).map(buffLvLData => (
												<Fragment key={Math.random() * 200}>
													{buffLvLData[1].requiredLVL > Number(watch('lvl')) && (
														<div className={scss.guild_disable_container}></div>
													)}
													<button
														type='button'
														className={
															//@ts-ignore
															guildIsNull || !guild?.guildBuffs?.[buffLvLData[1].buffNames[0]]
																? 0 === buffLvLData[1].buffPercentages[0]
																	? `${scss.guild_editor_buff_lvl} ${scss.guild_editor_buff_lvl_selected}`
																	: scss.guild_editor_buff_lvl
																	:
																	//@ts-ignore
																	guild?.guildBuffs?.[buffLvLData[1].buffNames[0]] === buffLvLData[1].buffPercentages[0]
																? `${scss.guild_editor_buff_lvl} ${scss.guild_editor_buff_lvl_selected}`
																: scss.guild_editor_buff_lvl
															}
															disabled={
																//@ts-ignore
																guild?.guildBuffs?.[buffLvLData[1].buffNames[0]] === buffLvLData[1].buffPercentages[0]
															}
															onClick={() =>
																dispatch(
																	changeGuildBuff({
																		buffNames: buffLvLData[1].buffNames,
																		buffPercentages: buffLvLData[1].buffPercentages,
																		requiredLVL: buffLvLData[1].requiredLVL,
																	})
																)
															}>
															{buffLvLData[0]}
														</button>
													</Fragment>
												)
											)}
										</Fragment>
									)
								})}
							</div>
						</div>
					))}
				</div>
				<div className={scss.guild_create_container}>
					<button type='submit'>{guild?.name ? 'Change Guild!' : 'Create Guild!'}</button>
				</div>
			</form>
		</Fragment>
	)
}

export default GuildEditor
