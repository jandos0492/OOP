//Task 1
// Мы создаем основу для интернет магазина, нам необходимо создать объект для описания процессоров. 
// добавьте в него свойство производитель (producer) равное например AMD
// добавьте в него свойство цена (amount) равное например 250.00
// добавьте в него свойство семейство (family) равное например AMD Ryzen 7
// добавьте в него название (name) например Ryzen 7 3700X

const cpu = {
	"producer": "AMD",
	"amount": 250.00,
	"family": "AMD Ryzen 7",
	"name": "Ryzen 7 3700X"
};
// console.log(cpu);

//Task 2
// Создайте наследника объекта cpu и назовите его memory (через proto).Да, мы будем строить магазин, который торгует и памятью.Поскольку мы наследуемся от cpu то все свойства останутся.
// Заполним объект memory.
// producer = Hynix
// amount =  60
// memory = 2048
// name = Hynix DDR4-2666
// family = DDR4

// создаем memory тут.
let memory = {
	__proto__: cpu
};

memory.producer = "Hunyx";
memory.amount = 60;
memory.memory = 2048;
memory.name = "Hynix DDR4-2666";
memory.family = "DDR4";


//Task 3.
// Представим себе ситуацию, что мы начали использовать данные объекты на странице и поняли что нам не хватает изображения. Добавим свойство image в объект cpu. Поскольку, memory наследуется cpu то данное свойство появится и у него. Просто дописываем данное свойство в cpu.

cpu.image = "";

// Task 4. 
// Добавьте в свойство image для cpu ссылку
// https://i2.rozetka.ua/goods/1865699/copy_amd_fx_series_fx_9590_fd9590fhhkwof_58abf05e14fdc_58abfc46c2b65_58abff06c94bd_images_1865699744.jpg
// а для memory - ссылку https://i2.rozetka.ua/goods/17090881/189441988_images_17090881613.jpg

cpu.image = "https://i2.rozetka.ua/goods/1865699/copy_amd_fx_series_fx_9590_fd9590fhhkwof_58abf05e14fdc_58abfc46c2b65_58abff06c94bd_images_1865699744.jpg";

memory.image = "https://i2.rozetka.ua/goods/17090881/189441988_images_17090881613.jpg";

// console.log(memory);
// console.log(cpu);

// Task 5. 
// Добавьте для cpu метод sale(p) - который возвращает стоимость amount товара с учетом скидки p. Скидка задается в процентах. Например 5%.  
// 

cpu.sale = function(p) {
	return (this.amount - (this.amount * (0.01 * p)));
}
// console.log(cpu.sale(10));