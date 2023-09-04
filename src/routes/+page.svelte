<script>
	import Nested from './Nested.svelte';
	import PackageInfo from './PackageInfo.svelte';
	let packageInfo = {
		name: 'Json',
		version: '0.1.1',
		speed: '2',
		website: 'jsonbond.com'
	};
</script>

<Nested answer={'42'} />
<Nested />

<PackageInfo {...packageInfo} />
