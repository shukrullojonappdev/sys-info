const osu = require('node-os-utils')
const si = require('systeminformation')

window.addEventListener('DOMContentLoaded', () => {

	const pc = document.querySelector('.pc')
	si.baseboard().then(data => {
		const pcManufacturer = data.manufacturer
		pc.innerText = pcManufacturer
	})

	const platform = document.querySelector('.platform')
	osu.os.oos().then(info => {
		const distro = info
		platform.innerText = distro
	})

	const cpu = document.querySelector('.cpu')
	si.cpu().then(data => {
		const cpuManufacturer = data.manufacturer
		const cpuBrand = data.brand
		const cpuSpeed = data.speed
		const cpuCores = data.cores
		const cpuInfo = cpuManufacturer + ' ' + cpuBrand + ' ' + cpuCores.toString() + ' cores ' + cpuSpeed.toString() + 'GHz'
		cpu.innerText = cpuInfo
	})

	const gpu = document.querySelector('.gpu')
	si.graphics().then(data => {
		const gpuController = data.controllers
		const count = data.controllers.length
		for (let i = 0; i < count; i++) {
			console.log(gpuController[i].model)
			const element = document.createElement('p')
			element.innerText = gpuController[i].model
			gpu.appendChild(element)
		}
	})

	const ram = document.querySelector('.ram')
	si.mem().then(data => {
		const memTotal = data.total/1024/1024/1024
		const fixedMem = memTotal.toFixed(2)
		ram.innerText = fixedMem + ' Gb'
	})
})
