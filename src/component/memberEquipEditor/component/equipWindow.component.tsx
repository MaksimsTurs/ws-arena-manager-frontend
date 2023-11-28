import scss from '../scss/equipWindow.module.scss'

import { EquipListContainerProps, FetchEqipInPosition } from '../memberEquipEditor.type'
import { EquipInitialState } from '@/store/memberEquip/memberEquip.type'
import { WindowContextState } from '@/store/windowContext/windowContext.type'
import { AppDispatch, RootState } from '@/store/store'

import { Fragment } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import EquipData from './equipData.component'
import EquipList from './equipList.component'
import NotificationBox from '@/component/notificationBox/notificationBox.component'

import useFetch from '@/hook/useFetch/useFetch.hook'

import { selectEquipToCheck } from '@/store/memberEquip/memberEquip.slice'

const EquipWindow = ({
	memberLVL,
	isEquipWindowVisilbe,
	setEquipWindowVisilbe,
	classEquipType,
}: EquipListContainerProps) => {
	let equipString: string = ''

	const navigate = useNavigate()
	const dispatch = useDispatch<AppDispatch>()
	const equipPosition = useLocation().search.replace('?equip-position=', '')

	const { selectedEquip, memberEquip } = useSelector<RootState, EquipInitialState>(state => state.playerEquipSlice)
	const { isEditMode, currentTab } = useSelector<RootState, WindowContextState>(state => state.windowContextSlice)

	if (equipPosition.split(/[A-Z]/)[1]) {
		equipString = `r${equipPosition.split(/[A-Z]/)[1]}`
	} else {
		equipString = equipPosition
	}

	const { data, error, isLoading } = useFetch<FetchEqipInPosition>(
		`/get-equip-in-position`,
		{ equipString, memberLVL, classEquipType },
		(isEquipWindowVisilbe && isEditMode)||(currentTab === 'Add Member!' && isEquipWindowVisilbe),
		[equipString, memberLVL, classEquipType]
	)

	const closeThisWindow = () => {
		if (selectedEquip) {
			dispatch(selectEquipToCheck(undefined))
		} else if (isEquipWindowVisilbe) {
			setEquipWindowVisilbe(false)
			navigate('/')
		}
	}

	return (
		<Fragment>
			<NotificationBox
				isVisible={error.length > 0}
				type='error'
				texts={error}
			/>
			{error.length <= 0 && (
				<div className={(selectedEquip || isEquipWindowVisilbe) ? scss.equip_list_container : `${scss.equip_list_container} ${scss.equip_list_hidden}`}>
					<button
						className={scss.equip_list_close_button}
						type='button'
						onClick={closeThisWindow}>
						&#10005;
					</button>
					{selectedEquip ? (
						<EquipData
							currentTab={currentTab}
							isEditMode={isEditMode}
							memberEquip={memberEquip}
							selectedEquip={selectedEquip}
							equipPosition={equipPosition}
							closeThisWindow={closeThisWindow}
						/>
					) : (
						<EquipList equipData={data?.equip || []} isLoading={isLoading} />
					)}
				</div>
			)}
		</Fragment>
	)
}

export default EquipWindow
