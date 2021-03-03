/** Задача 2 - Функция findAndRemove
Требуется написать функцию findAndRemove, которая
принимает: 
	1) Текущее состояние телефонной книги
	2) Запрос для поиска
требуется:
в текущем состоянии телефонной книги найти и удалить все записи, которые удовлетворяют требованиям
	1) См. find из task_3
возвращает:
	Число удаленных записей
@param {Array<{ phone: string, name: string, email?: string }>} phoneBook - Текущее состояние телефонной книги
@param {string} query Строка для поиска
@returns {number} Количество удаленных записей
 */
function findAndRemove(phoneBook, query) {
	let deletedContacts = 0;
	if (!query) return deletedContacts;
	if (query == "*") return deleteAllContacts(phoneBook);

	query = query.replace(/-/g, "");
	let index = 0;
	for (let contact of phoneBook){
		for (let property in contact){
			if (contact[property].search(query) != -1
				|| (property == "phone" 
				&& contact[property].replace(/-/g, "").search(query) != -1)){
					phoneBook.slice(index, index);
					deletedContacts++;
					break;
			}
		}
		index++;
	}

	return deletedContacts;
}

function deleteAllContacts(phoneBook){
	var length = phoneBook.length;
	phoneBook = [];

	return length;
}

module.exports.findAndRemove = findAndRemove;
