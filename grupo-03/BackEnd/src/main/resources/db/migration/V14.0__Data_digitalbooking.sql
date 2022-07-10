INSERT INTO digitalbooking.categories (id,title,quantity,image) VALUES
	 ('0d9ec5a0-6382-4afe-9946-38730b5e953d','Bed and breakfast','727','https://images.unsplash.com/photo-1597776776684-61122dcf84e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=766&q=80'),
	 ('0250a477-dc2c-46dc-a2a7-822d0daa529e','Departamentos','633','https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'),
	 ('42499dd9-bdcb-40f5-ac14-baa64f90dd68','Hostel','459','https://images.unsplash.com/photo-1590856029620-9b5a4825d3be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80'),
	 ('028b1482-3fe5-419e-b4ee-3fc9eb403954','Hoteles','693','https://images.unsplash.com/photo-1606046604972-77cc76aee944?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');

INSERT INTO digitalbooking.cities (id,name,province,country) VALUES
	 ('47c12265-ebb2-4ede-bad4-ff2c7f1d69af','CABA','Buenos Aires','Argentina'),
	 ('63bdc332-cc33-449a-b69b-99c2ade396a6','Medellín','Antioquía','Colombia'),
	 ('85e483ed-a024-467f-846b-ed7b3e11f687','Florianópolis','Santa Catarina','Brasil'),
	 ('99aa9281-fc48-4a8f-b1d5-98b9259f5b2d','Rosario','Santa Fe','Argentina'),
	 ('aee6c076-33d2-441c-bbfc-3b13e8f32111','La Plata','Buenos Aires','Argentina'),
	 ('baf4defb-1018-41ba-8202-bd83a187b012','Córdoba','Córdoba','Argentina'),
	 ('c20253eb-477a-4344-9377-60b6ea7fbaa6','Mendoza','Mendoza','Argentina'),
	 ('cb159a06-5bf0-45a6-be82-999ef6667424','Florianópolis','Santa Catarina','Brasil'),
	 ('ddff54db-15e4-40cd-975e-951353a57dfb','San Rafael','Mendoza','Argentina'),
	 ('eaf884c0-1051-47b1-a6c9-e19cf43ce6e5','New Lornatown','Provincia','Bouvet Island (Bouvetoya)');

INSERT INTO digitalbooking.features (id,name) VALUES
	 ('036831eb-2f6e-4a50-8e77-05d0650fa482','Televisor'),
	 ('3463f750-d64f-4cd9-8d62-3302c91016ef','Pileta'),
	 ('57a7cf89-0dba-4356-85ec-65e1bb2f095b','Apto mascotas'),
	 ('5b490c54-d4f0-48ce-a869-8b86bf1fe2ba','Wifi'),
	 ('5bc34552-08ef-426b-a3b9-278b82fbd373','Cocina'),
	 ('734067bc-b6e3-4a51-9340-3590c50d5379','Aire acondicionado'),
	 ('965dad63-b854-4d01-ae0d-8f231b2a1b6c','Estacionamiento gratuito');

INSERT INTO digitalbooking.policy (id,norms,healthAndSecurity,cancellationPolicy) VALUES
	 ('028b1482-3fe5-419e-b4ee-3fc9eb403954','Check-out: 10:00. No se permiten fiestas. No fumar','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.'),
	 ('0d9ec5a0-6382-4afe-9946-38730b5e953d','Check-out: 10:00. No se permiten fiestas. No fumar','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.'),
	 ('42499dd9-bdcb-40f5-ac14-baa64f90dd68','Check-out: 10:00. No se permiten fiestas. No fumar','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.'),
	 ('0250a477-dc2c-46dc-a2a7-822d0daa529e','Check-out: 10:00. No se permiten fiestas. No fumar','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.'),
	 ('c20253eb-477a-4344-9377-60b6ea7fbaa6','Check-out: 10:00. No se permiten fiestas. No fumar','Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus. Detector de humo. Depósito de seguridad','Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.');

INSERT INTO digitalbooking.products (id,title,description_title,description,address,availability,cities_id,categories_id,policy_id) VALUES
	 ('57bb7c61-f07b-4102-b98d-de396d83e04d','Hotel Metropolitano','Hotel Metropolitano','Suscipit assumenda labore dolorem debitis et expedita officia. A aliquid optio quae voluptas ad temporibus. Consectetur earum sed minus autem. Eaque sint temporibus qui sit iure. Dolor consequatur aspernatur vel quasi temporibus ipsam. Repellendus dolorum deserunt et quibusdam fugit dolorem quia ea ratione.','México 1559, C1097ABE CABA','si','47c12265-ebb2-4ede-bad4-ff2c7f1d69af','028b1482-3fe5-419e-b4ee-3fc9eb403954','028b1482-3fe5-419e-b4ee-3fc9eb403954'),
	 ('c183aa47-175d-4a41-ab08-6969000e8656','B&B Colombia','B&B Colombia','Esse assumenda asperiores amet quas perspiciatis.Suscipit assumenda labore dolorem debitis et expedita officia. A aliquid optio quae voluptas ad temporibus. Consectetur earum sed minus autem. Eaque sint temporibus qui sit iure. Dolor consequatur aspernatur vel quasi temporibus ipsam. Repellendus dolorum deserunt et quibusdam fugit dolorem quia ea ratione.','Cl. 17 ##40b - 300, Medellín, El Poblado, Medellín, Antioquia','si','63bdc332-cc33-449a-b69b-99c2ade396a6','0d9ec5a0-6382-4afe-9946-38730b5e953d','0d9ec5a0-6382-4afe-9946-38730b5e953d'),
	 ('e1bc4627-85d2-4204-915e-4da27107c985','Hostel en Córdoba','Cupiditate quaerat veritatis suscipit.','Suscipit assumenda labore dolorem debitis et expedita officia. A aliquid optio quae voluptas ad temporibus. Consectetur earum sed minus autem. Eaque sint temporibus qui sit iure. Dolor consequatur aspernatur vel quasi temporibus ipsam. Repellendus dolorum deserunt et quibusdam fugit dolorem quia ea ratione.','9 de Julio 1265, X5022ABG Córdoba','si','baf4defb-1018-41ba-8202-bd83a187b012','42499dd9-bdcb-40f5-ac14-baa64f90dd68','42499dd9-bdcb-40f5-ac14-baa64f90dd68'),
	 ('e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','Departamento Mendoza','Cupiditate quaerat veritatis suscipit.','Dolore dolorum repellat qui voluptatibus officia vel. Ut recusandae temporibus atque aspernatur quia ex autem aut. Quia libero rem dolor qui. Sit enim recusandae quia ea ut et. Unde ut autem rerum asperiores et modi aperiam explicabo optio. Maiores eos velit libero.','753 Avenida Bartolomé Mitre Edificio Millenium, piso 10 depto 7, 5500 Mendoza','si','c20253eb-477a-4344-9377-60b6ea7fbaa6','0250a477-dc2c-46dc-a2a7-822d0daa529e','0250a477-dc2c-46dc-a2a7-822d0daa529e');

INSERT INTO digitalbooking.products_features (id,products_id,features_id) VALUES
	 ('149d78a8-e7c9-11ec-a96f-0242ac110002','c183aa47-175d-4a41-ab08-6969000e8656','3463f750-d64f-4cd9-8d62-3302c91016ef'),
	 ('198be697-e7c9-11ec-a96f-0242ac110002','c183aa47-175d-4a41-ab08-6969000e8656','5b490c54-d4f0-48ce-a869-8b86bf1fe2ba'),
	 ('1f6afa1a-e7c9-11ec-a96f-0242ac110002','c183aa47-175d-4a41-ab08-6969000e8656','734067bc-b6e3-4a51-9340-3590c50d5379'),
	 ('26f70494-e7c9-11ec-a96f-0242ac110002','c183aa47-175d-4a41-ab08-6969000e8656','965dad63-b854-4d01-ae0d-8f231b2a1b6c'),
	 ('38052a9a-e7a3-11ec-a96f-0242ac110002','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','5b490c54-d4f0-48ce-a869-8b86bf1fe2ba'),
	 ('3f4052f0-e7a3-11ec-a96f-0242ac110002','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','5bc34552-08ef-426b-a3b9-278b82fbd373'),
	 ('5091564f-e7a3-11ec-a96f-0242ac110002','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','965dad63-b854-4d01-ae0d-8f231b2a1b6c'),
	 ('707b7123-e7a3-11ec-a96f-0242ac110002','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','57a7cf89-0dba-4356-85ec-65e1bb2f095b'),
	 ('d6d35aeb-e7b6-11ec-a96f-0242ac110002','e1bc4627-85d2-4204-915e-4da27107c985','3463f750-d64f-4cd9-8d62-3302c91016ef'),
	 ('dd90a19a-e7b6-11ec-a96f-0242ac110002','e1bc4627-85d2-4204-915e-4da27107c985','5b490c54-d4f0-48ce-a869-8b86bf1fe2ba'),
	 ('e21af70e-e7c8-11ec-a96f-0242ac110002','57bb7c61-f07b-4102-b98d-de396d83e04d','5b490c54-d4f0-48ce-a869-8b86bf1fe2ba'),
	 ('e535da3d-e7b6-11ec-a96f-0242ac110002','e1bc4627-85d2-4204-915e-4da27107c985','5bc34552-08ef-426b-a3b9-278b82fbd373'),
	 ('e978d987-e7c8-11ec-a96f-0242ac110002','57bb7c61-f07b-4102-b98d-de396d83e04d','734067bc-b6e3-4a51-9340-3590c50d5379'),
	 ('eef4b174-e7c8-11ec-a96f-0242ac110002','57bb7c61-f07b-4102-b98d-de396d83e04d','965dad63-b854-4d01-ae0d-8f231b2a1b6c'),
	 ('ef1427b5-e7b6-11ec-a96f-0242ac110002','e1bc4627-85d2-4204-915e-4da27107c985','036831eb-2f6e-4a50-8e77-05d0650fa482'),
	 ('f6599aca-e7c8-11ec-a96f-0242ac110002','57bb7c61-f07b-4102-b98d-de396d83e04d','3463f750-d64f-4cd9-8d62-3302c91016ef');

INSERT INTO digitalbooking.images (id,title,url,product_id) VALUES
	 ('a16e7b4f-2b3d-4f3d-aa7e-3d8d971acfa6','Hotel','https://c1g3-bucket.s3.amazonaws.com/pexels-photo-2725675.jpeg','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('df56047e-08b4-4326-a4e7-09c51f5020cf','Hotel','https://c1g3-bucket.s3.amazonaws.com/linea61.webp','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('d155cbcf-abe9-45ff-a6f9-14b6839d4f20','Hotel','https://c1g3-bucket.s3.amazonaws.com/linea62.jpeg','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('b52112dc-5484-4388-9228-e440d287effd','Hotel','https://c1g3-bucket.s3.amazonaws.com/linea63.webp','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('b1cff70c-2d87-4ff4-9af1-5c978f751f2e','Hotel','https://c1g3-bucket.s3.amazonaws.com/linea64.jpg','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('aeda023b-671d-4b50-ba6d-8b03c293ca86','Hotel','https://c1g3-bucket.s3.amazonaws.com/linea65.webp','57bb7c61-f07b-4102-b98d-de396d83e04d'),
	 ('7d48f8ac-0ad0-4506-8b66-ad340f63c803','B&B','https://c1g3-bucket.s3.amazonaws.com/linea66.avif','c183aa47-175d-4a41-ab08-6969000e8656'),
	 ('29e80434-aef4-4430-8224-769659a62814','B&B','https://c1g3-bucket.s3.amazonaws.com/linea67.avif','c183aa47-175d-4a41-ab08-6969000e8656'),
	 ('d26b18fb-1ce2-4190-aa24-7bc0120cfe68','B&B','https://c1g3-bucket.s3.amazonaws.com/linea68.avif','c183aa47-175d-4a41-ab08-6969000e8656'),
	 ('25cc14ec-6ab5-4564-ad9f-bd6596774f95','B&B','https://c1g3-bucket.s3.amazonaws.com/linea69.avif','c183aa47-175d-4a41-ab08-6969000e8656'),
	 ('e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b','B&B','https://c1g3-bucket.s3.amazonaws.com/bedAndBreakfast.jpg','c183aa47-175d-4a41-ab08-6969000e8656');
INSERT INTO digitalbooking.images (id,title,url,product_id) VALUES
	 ('9ccdade6-1713-4c35-a5fc-ddf8e1be9f61','Hostel','https://c1g3-bucket.s3.amazonaws.com/linea68.avif','e1bc4627-85d2-4204-915e-4da27107c985'),
	 ('1c242722-1f6e-4b0e-8bce-f6d27aebdce0','Hostel','https://c1g3-bucket.s3.amazonaws.com/linea69.avif','e1bc4627-85d2-4204-915e-4da27107c985'),
	 ('bcd8a3f7-871a-473f-adef-6839ee7553a2','Hostel','https://c1g3-bucket.s3.amazonaws.com/linea67.avif','e1bc4627-85d2-4204-915e-4da27107c985'),
	 ('26a2ef0c-bfc6-4d79-af9a-f53483a8f644','Hostel','https://c1g3-bucket.s3.amazonaws.com/linea74.avif','e1bc4627-85d2-4204-915e-4da27107c985'),
	 ('0d9ec5a0-6382-4afe-9946-38730b5e953d','Hostel','https://c1g3-bucket.s3.amazonaws.com/hostel.jpg','e1bc4627-85d2-4204-915e-4da27107c985'),
	 ('9a3fc5c3-c602-4ea2-bdd5-a897cc94e62a','Imagen departamento','https://c1g3-bucket.s3.amazonaws.com/linea75.avif','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b'),
	 ('7a910fa9-fc74-468c-84ae-8cbe40eee773','Imagen departamento','https://c1g3-bucket.s3.amazonaws.com/linea76.avif','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b'),
	 ('2f3f2a1a-07d0-47c1-94a9-6ae47a59aff9','Imagen departamento','https://c1g3-bucket.s3.amazonaws.com/linea77.avif','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b'),
	 ('bb4fbfd1-8275-4f0a-ad58-3a01a087a1bc','Imagen departamento','https://c1g3-bucket.s3.amazonaws.com/linea78.avif','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b'),
	 ('028b1482-3fe5-419e-b4ee-3fc9eb403954','Imagen departamento','https://c1g3-bucket.s3.amazonaws.com/apartment.jpg','e44f45b1-6d0c-4f94-b7c7-21f0b2fd6f5b');


INSERT INTO digitalbooking.clients (id,name,surname,city,user_id) VALUES
	 ('1ad8bff7-66ca-4eb7-a717-d4f37e760f7a','user','user',NULL,'cf748aa3-7b84-401a-8099-548bcaa4d721'),
	 ('cdcb5598-86d4-4552-a1d8-cb3d697b095d','admin','admin',NULL,'862140bb-41d4-4d7d-a95e-491a131c57ad');

