CREATE DATABASE dealership;

CREATE TABLE user_profile (
  id SERIAL PRIMARY KEY,
  username varchar(255) NOT NULL,
  user_email varchar(255) NOT NULL,
  user_password varchar(255) NOT NULL
);

CREATE TABLE transaction (
  id SERIAL PRIMARY KEY,
  confirmation_number varchar(255),
  user_id INTEGER,
  CONSTRAINT FK_user_id
    FOREIGN KEY (user_id)
      REFERENCES user_profile(id) 
);

CREATE TABLE car (
  id SERIAL PRIMARY KEY,
  VIN varchar(255),
  make varchar(255),
  model varchar(255),
  color varchar(255),
  price INTEGER,
  image_path varchar(255)
);

INSERT INTO car (VIN,make,model,color,price,image_path)
VALUES 
('1FMJU1J59BEF45401', 'Mercedes-Benz', 'C-class', 'Black', 43550, 'https://images.unsplash.com/photo-1559167628-9394a8576f33?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80'),
('1G4AW69N2DH524774', 'Mercedes-Benz', 'E-class', 'White', 54950, 'https://di-uploads-pod3.dealerinspire.com/mercedesbenzofalexandria/uploads/2020/11/2021-Mercedes-Benz-E-350-Designo-Diamond-White-Metallic.png'),
('JH4DB1650MS013392', 'Mercedes-Benz', 'S-class', 'Silver', 111100, 'https://media.gq.com/photos/5f4f0896df1845a5b4bdc71d/16:9/w_1280,c_limit/20C0417_003.jpg'),
('5TFHW5F13AX136128', 'BMW', '330X', 'Black', 86800, 'https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2022BMC220004_01_1280_668.jpg'),
('1GCHK23244F199207', 'BMW', '540I', 'White', 59450, 'https://images.dealer.com/ddc/vehicles/2022/BMW/540/Sedan/color/Mineral%20White%20Metallic-A96-202,202,202-640-en_US.jpg'),
('JHLRE48518C002529', 'BMW', '740I', 'Black', 86800, 'https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_700/v1/svp/dep/22bmw7ser750ixdrvluxawdsd6t/bmw_227ser750ixdrvluxawdsd6t_angularfront_carbonblackmetallic'),
('1FMZU34E2XCB34385', 'Audi', 'S3', 'Red', 34800, 'https://cdn.jdpower.com/JDPA_2022%20Audi%20S3%20Red%20Front%20Quarter%20View.jpg'),
('4S3BJ6321N6900903', 'Audi', 'S5', 'Black', 55300, 'https://inv.assets.sincrod.com/ChromeColorMatch/us/WHITE_cc_2022AUC180036_01_1280_0E0E.jpg'),
('JH4DA9360PS004131', 'Audi', 'RS7', 'Grey', 118500, 'https://95octane.com/wp-content/uploads/2021/10/mansory-audi-rs7_t.jpg'),
('1G8ZF5287XZ363384', 'Honda', 'CRV', 'White', 26400, 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/11002696/thumbnails/large/7FARW1H78NE010642/42d58567cb25bca67d34b81f0d7bf6a3.png'),
('JH4DA3341JS014654', 'Honda', 'Accord', 'Silver', 26120, 'https://images.dealer.com/ddc/vehicles/2022/Honda/Accord/Sedan/trim_Sport_SE_14e119/color/Lunar%20Silver%20Metallic-SI-148%2C147%2C147-640-en_US.jpg?impolicy=resize&w=414'),
('4S3BK6354S6355265', 'Honda', 'Civic', 'Black', 22350, 'https://s3.us-east-2.amazonaws.com/dealer-inspire-vps-vehicle-images/110005125/2HGFE2F5XNH574233/adb7496940f5882930c744af46859cf4.png'),
('3GCRKSE34AG162050', 'Ford', 'Fussion', 'Black', 23170, 'https://blogmedia.dealerfire.com/wp-content/uploads/sites/275/2020/02/2020-Ford-Fusion-Agate-Black-Exterior-Color_o.jpg'),
('JH4KA3250LC002400', 'Ford', 'Transit', 'White', 36745, 'https://file.kelleybluebookimages.com/kbb/base/evox/ExtSpP/14942/2022-Ford-Transit%20250%20Cargo%20Van-360SpinFrame_14942_032_2400x1800_nologo.png'),
('WBA3A5C57CF256651', 'Ford', 'F150', 'Blue', 29990, 'https://file.kelleybluebookimages.com/kbb/base/evox/CP/10934/2016-Ford-F150%20Regular%20Cab-front_10934_032_1843x1309_SZ_cropped.png')
;