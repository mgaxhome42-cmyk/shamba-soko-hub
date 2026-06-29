<!DOCTYPE html>
<html lang="sw">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mkulima Soko Tanzania</title>
    <!-- Tailwind CSS kwa ajili ya muonekano mzuri -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Lucide Icons kwa ajili ya ikoni za kisasa -->
    <script src="https://unpkg.com/lucide@latest"></script>
    <!-- Chart.js kwa ajili ya kutengeneza Grafu ya bei kwenye simu -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
</head>
<body class="bg-gray-50 text-gray-900 pb-24 font-sans selection:bg-emerald-500 selection:text-white">

    <!-- Rangi za Bendera ya Tanzania Juu -->
    <div class="fixed top-0 left-0 right-0 h-1 flex z-50">
        <div class="flex-1 bg-emerald-600"></div>
        <div class="flex-1 bg-yellow-400"></div>
        <div class="flex-1 bg-blue-600"></div>
        <div class="flex-1 bg-black"></div>
    </div>

    <!-- Sehemu ya Juu (Header) -->
    <header class="bg-white border-b border-gray-100 py-4 px-4 sticky top-0 z-30 shadow-sm">
        <div class="max-w-md mx-auto flex justify-between items-center">
          <div>
            <h1 class="text-xl font-black bg-gradient-to-r from-emerald-600 via-yellow-500 to-blue-600 bg-clip-text text-transparent">Mkulima Soko</h1>
            <p class="text-xs text-gray-500">Soko la Kidijitali Tanzania</p>
          </div>
          <span class="bg-emerald-50 text-emerald-700 text-xs px-2.5 py-1 rounded-full font-bold border border-emerald-100">Live 🇹🇿</span>
        </div>
    </header>

    <!-- Muundo Mkuu wa Kurasa -->
    <main class="max-w-md mx-auto p-4" id="app-content">
        <!-- Kodi ya kurasa itawekwa hapa na JavaScript -->
    </main>

    <!-- Navigation ya Chini ya Simu -->
    <nav class="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-100 py-2.5 flex justify-around shadow-xl z-40">
        <button onclick="switchTab('soko')" id="nav-soko" class="flex flex-col items-center gap-1 text-emerald-600 font-bold">
          <i data-lucide="shopping-bag" class="w-5 h-5"></i>
          <span class="text-[11px]">Soko</span>
        </button>
        <button onclick="switchTab('mkulima')" id="nav-mkulima" class="flex flex-col items-center gap-1 text-gray-400">
          <i data-lucide="sprout" class="w-5 h-5"></i>
          <span class="text-[11px]">Mkulima</span>
        </button>
        <button onclick="switchTab('usafiri')" id="nav-usafiri" class="flex flex-col items-center gap-1 text-gray-400">
          <i data-lucide="truck" class="w-5 h-5"></i>
          <span class="text-[11px]">Usafiri</span>
        </button>
    </nav>

    <script>
        // Data za mwanzo (Kama simu haina kitu)
        const dataMfano = [
            { id: '1', zao: 'Mahindi', bei: 800, eneo: 'Iringa', kiasi: 'Viroba 50' },
            { id: '2', zao: 'Mpunga', bei: 1200, eneo: 'Morogoro', kiasi: 'Mifuko 20' },
            { id: '3', zao: 'Viazi', bei: 1500, eneo: 'Mbeya', kiasi: 'Saga 10' }
        ];

        // Hakikisha kuna data kwenye simu
        if (!localStorage.getItem('soko_mazao')) {
            localStorage.setItem('soko_mazao', JSON.stringify(dataMfano));
        }

        // Kazi ya kubadilisha Kurasa (Tabs)
        function switchTab(tabName) {
            const content = document.getElementById('app-content');
            
            // Rekebisha rangi za menu ya chini
            ['soko', 'mkulima', 'usafiri'].forEach(t => {
                const btn = document.getElementById(`nav-${t}`);
                btn.className = t === tabName 
                    ? `flex flex-col items-center gap-1 ${tabName === 'soko' ? 'text-amber-500' : tabName === 'mkulima' ? 'text-emerald-600' : 'text-blue-600'} font-bold`
                    : "flex flex-col items-center gap-1 text-gray-400";
            });

            const mazao = JSON.parse(localStorage.getItem('soko_mazao'));

            if (tabName === 'soko') {
                content.innerHTML = `
                    <div class="space-y-4">
                        <h2 class="text-lg font-bold flex items-center gap-2 text-amber-600"><i data-lucide="shopping-bag"></i> Sehemu ya Manunuzi</h2>
                        <div class="grid gap-3" id="soko-list"></div>
                    </div>`;
                
                const list = document.getElementById('soko-list');
                mazao.forEach(z => {
                    list.innerHTML += `
                        <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex justify-between items-center transition-all hover:scale-[1.01]">
                            <div>
                                <h3 class="font-bold text-gray-900 text-base">${z.zao}</h3>
                                <p class="text-xs text-gray-500 flex items-center gap-1 mt-1">
                                    <i data-lucide="map-pin" class="w-3 h-3"></i> ${z.eneo} | Kiasi: ${z.kiasi}
                                </p>
                            </div>
                            <div class="text-right">
                                <p class="text-emerald-600 font-black text-base">TSH ${Number(z.bei).toLocaleString()} <span class="text-[10px] text-gray-400 font-normal">/Kg</span></p>
                            </div>
                        </div>`;
                });
            } 
            
            else if (tabName === 'mkulima') {
                content.innerHTML = `
                    <div class="space-y-5">
                        <h2 class="text-lg font-bold flex items-center gap-2 text-emerald-600"><i data-lucide="sprout"></i> Jopo la Mkulima</h2>
                        
                        <!-- Fomu ya Kuongeza Zao -->
                        <form id="fomu-zao" class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
                            <h3 class="text-sm font-bold text-gray-700 mb-1 flex items-center gap-1"><i data-lucide="plus-circle" class="w-4 h-4"></i> Weka Zao Lako Sokoni</h3>
                            <div><label class="text-[11px] font-bold text-gray-500">Aina ya Zao</label><input type="text" id="input-zao" class="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-emerald-500" placeholder="Mf. Mahindi, Mpunga, Maharage" required></div>
                            <div class="grid grid-cols-2 gap-2">
                                <div><label class="text-[11px] font-bold text-gray-500">Bei (kwa Kg)</label><input type="number" id="input-bei" class="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-emerald-500" placeholder="TSH" required></div>
                                <div><label class="text-[11px] font-bold text-gray-500">Kiasi</label><input type="text" id="input-kiasi" class="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-emerald-500" placeholder="Mf. Mifuko 10" required></div>
                            </div>
                            <div><label class="text-[11px] font-bold text-gray-500">Mkoa / Eneo uliopo</label><input type="text" id="input-eneo" class="w-full border border-gray-200 rounded-xl p-2.5 text-sm focus:outline-emerald-500" placeholder="Mf. Iringa, Mbeya, Arusha" required></div>
                            <button type="submit" class="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 font-bold text-sm shadow-md mt-2 transition-all">+ Tuma Sokoni Live</button>
                        </form>

                        <!-- Sehemu ya Grafu ya Bei -->
                        <div class="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 class="text-sm font-bold text-gray-700 mb-3 flex items-center gap-1"><i data-lucide="trending-up" class="w-4 h-4"></i> Mwenendo wa Bei za Soko (TSH)</h3>
                            <canvas id="grafuBei" width="100" height="60"></canvas>
                        </div>
                    </div>`;

                // Washa Fomu ya kutuma data
                document.getElementById('fomu-zao').addEventListener('submit', function(e) {
                    e.preventDefault();
                    const mpya = {
                        id: Date.now().toString(),
                        zao: document.getElementById('input-zao').value,
                        bei: Number(document.getElementById('input-bei').value),
                        kiasi: document.getElementById('input-kiasi').value,
                        eneo: document.getElementById('input-eneo').value
                    };
                    const dataZilizopo = JSON.parse(localStorage.getItem('soko_mazao'));
                    dataZilizopo.unshift(mpya);
                    localStorage.setItem('soko_mazao', JSON.stringify(dataZilizopo));
                    alert('Hongera mkuu! Zao lako limeingia sokoni live.');
                    switchTab('mkulima');
                });

                // Chora Grafu ya Bei kwa kutumia Chart.js
                const ctx = document.getElementById('grafuBei').getContext('2d');
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['Mahindi', 'Mpunga', 'Viazi', 'Maharage'],
                        datasets: [{
                            label: 'Bei ya Wastani',
                            data: [800, 1200, 1500, 2000],
                            backgroundColor: ['#059669', '#d97706', '#2563eb', '#dc2626'],
                            borderRadius: 6
                        }]
                    },
                    options: { responsive: true, plugins: { legend: { display: false } } }
                });
            } 
            
            else if (tabName === 'usafiri') {
                content.innerHTML = `
                    <div class="space-y-4">
                        <h2 class="text-lg font-bold flex items-center gap-2 text-blue-600"><i data-lucide="truck"></i> Usafirishaji & Lojistiki</h2>
                        <div class="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm text-center py-8">
                            <i data-lucide="truck" class="w-12 h-12 text-blue-500 mx-auto mb-3 animate-pulse"></i>
                            <h3 class="font-bold text-gray-800">Tafuta Usafiri wa Mazao</h3>
                            <p class="text-xs text-gray-500 max-w-xs mx-auto mt-1">Ungana na madereva wa malori karibu na mkoa wako kusafirisha mazao yako kwenda sokoni kwa urahisi.</p>
                            <button onclick="alert('Sehemu hii inakuja hivi punde kwenye Toleo la Pili!')" class="mt-4 bg-blue-600 text-white font-bold text-xs px-4 py-2 rounded-xl shadow">Omba Gari la Usafiri</button>
                        </div>
                    </div>`;
            }

            // Washa upya ikoni zote za Lucide zilizowekwa upya
            lucide.createIcons();
        }

        // Fungua ukurasa wa Soko kwanza kabisa programu ikizinduliwa
        window.onload = () => switchTab('soko');
    </script>
</body>
</html>
