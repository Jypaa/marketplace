const { describe, test, expect, afterAll } = require('@jest/globals');
const supertest = require('supertest');

const connection = require('../db/pool');


const app = require('../app');

describe('GET store endpoint', ()=> {

  test('should return 200', (done)=> {
    supertest(app)
      .get('/api/store')
      .expect(200)
      .end(done)
  });

  test('should return json data', async ()=> {

    const response = await supertest(app)
        .get('/api/store')
        .set('Accept', 'application/json');
    
    expect(response.status).toEqual(200);
    expect(response.headers['content-type']).toMatch(/json/);

    expect(response.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: 1,
          product: 'Butter',
          seller: 'Jyri',
          price: '5'
        }), 
        
      ])
    )
  });
});
/*
describe('GET product by id enpoint', () => {

    test('should return 200 if item was found', (done) => {
      supertest(app)
        .get('/api/store/1')
        .expect(200)
        .end(done);
    });
  
    test('should return 200 and json if the item was found', async() => {
      const response = await supertest(app)
        .get('/api/store/1')
        .set('Accept', 'application/json');
  
      expect(response.status).toEqual(200);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body).toEqual(
        expect.arrayContaining([
            expect.objectContaining({
              id: 1,
              product: 'Butter',
              seller: 'Jyri',
              price: '5'
            }),  
          ])
      );
    });
  
});

describe('POST product endpoint', ()=> {

    const loggedInUser = {
      id: '',
      email: '',
      token: ''
    }
  
    beforeAll(async () => {
      connection.query('DELETE FROM users WHERE email=?', ['john.wayne@domain.com'])
      const data = {
        name: 'John Wayne',
        email: 'john.wayne@domain.com',
        password: 'password123'
      }
  
      const response = await supertest(app)
        .post('/api/users/signup')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .send(data)
      loggedInUser.id = response.body.id
      loggedInUser.email = response.body.email
      loggedInUser.token = response.body.token
    })
  
    afterAll(async() => {
      const deleteQuery = `DELETE FROM store WHERE product LIKE 'Test product' AND seller LIKE 'Test seller';`;
      connection.query(deleteQuery, (err, result) => {
        if(err) {
          console.log(err);
        }
      });
    });
  
    test('should create a new store', async() => {
      const store = {
        product: 'Test product',
        seller: 'Test seller',
        price: 'Test price'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(201);
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.body.id).toBeTruthy();
      expect(response.body.product).toEqual('Test product');
      expect(response.body.seller).toEqual('Test seller');
      expect(response.body.price).toEqual('Test price');
    });
  
    test('should not create a store without a seller and price property', async() => {
      const store = {
        product: 'Test Product'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"seller" is required');
    });
  
    test('should not create a store without a product and a price property', async() => {
      const store = {
        seller: 'Test Seller'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"product" is required');
    });
  
    test('should not create a store with an empty product value', async() => {
      const store = {
        product: "",
        seller: 'Test Seller',
        price: 'Test Price'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"product" is not allowed to be empty');
    });
  
    test('should not create a store with an empty seller value', async() => {
      const store = {
        product: 'Test Product',
        seller: "",
        price: 'Test Price'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(400);
      expect(response.text).toContain('"seller" is not allowed to be empty');
    });
  
    
  
    test('should not create a duplicate store', async() => {
      const store = {
        product: "Butter",
        seller: 'Jyri',
        price: '5'
      }
  
      const response = await supertest(app)
        .post('/api/store')
        .set('Accept', 'application/json')
        .set('Content', 'application/json')
        .set('Authorization', 'Bearer ' + loggedInUser.token)
        .send(store);
  
      expect(response.status).toEqual(400);
      expect(response.text).toContain('Product is in the database already');
    });
  
  });
  */