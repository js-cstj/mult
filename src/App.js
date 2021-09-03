/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		var num, table, tr, th, td;
		num = 6;
		app = document.getElementById("app");

		// PREMIERE ETAPE
		table = document.createElement("table");
		app.appendChild(table);
		table.setAttribute("border", "1");
		tr = document.createElement("tr");
		table.appendChild(tr);
		th = document.createElement("th");
		tr.appendChild(th);
		th.innerHTML = "&times;";
		th = document.createElement("th");
		tr.appendChild(th);
		th.innerHTML = num;
		for(let i = 1; i <= 12; i += 1) {
			tr = document.createElement("tr");
			table.appendChild(tr);
			th = document.createElement("th");
			tr.appendChild(th);
			th.innerHTML = i;
			td = document.createElement("td");
			tr.appendChild(td);
			td.innerHTML = i * num;
		}

		//DEUXIEME ETAPE
		table = app.appendChild(document.createElement("table"));
		table.setAttribute("border", "1")
		tr = table.appendChild(document.createElement("tr"));
		th = tr.appendChild(document.createElement("th"));
		th.innerHTML = "&times;";
		
		for (let i = 1; i <= 12; i += 1) {
			th = tr.appendChild(document.createElement("th"));
			th.innerHTML = i;

		}

		tr = table.appendChild(document.createElement("tr"));
		th = tr.appendChild(document.createElement("th"));
		th.innerHTML = num;
		
		for (let i = 1; i <= 12; i += 1) {
			td = tr.appendChild(document.createElement("td"));
			td.innerHTML = i * num;
		}

		//TROISIEME ETAPE
		table = app.appendChild(document.createElement("table"));
		table.setAttribute("border", "1")
		tr = table.appendChild(document.createElement("tr"));
		th = tr.appendChild(document.createElement("th"));
		th.innerHTML = "&times;";
		
		for (let i = 1; i <= 12; i += 1) {
			th = tr.appendChild(document.createElement("th"));
			th.innerHTML = i;

		}

		for (let j = 1; j <= 12; j += 1) {
			tr = table.appendChild(document.createElement("tr"));
			th = tr.appendChild(document.createElement("th"));
			th.innerHTML = j;
		
			for (let i = 1; i <= 12; i += 1) {
				td = tr.appendChild(document.createElement("td"));
				td.innerHTML = i * j;
			}
		}

	}
	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns undefined Ne retourne rien
	 */
	static init() {
		window.addEventListener("load", () => {
			this.main();
		});
	}
}
App.init();
