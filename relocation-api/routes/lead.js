var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const leadController = require('../controllers').lead;

/**
 * @swagger
 * /leads:
 *   get:
 *     summary: Retrieve a list of Leads with Appointments
 *     description: Retrieve a list of Leads with Appointments
 *     responses:
 *       200:
 *         description: A list of leads.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success: 
 *                    type: boolean
 *                    example: true
 *                 message: 
 *                    type: string
 *                    example: success
 *                 leads:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: lead id.
 *                         example: 0
 *                       name:
 *                         type: string
 *                         description: customer name.
 *                         example: Leanne Graham
 *                       request_id:
 *                         type: string
 *                         description: requst id.
 *                         example: M1234i
 *                       status:
 *                         type: string
 *                         description: status.
 *                         example: accepted
*                       origin:
 *                         type: string
 *                         description: origin.
 *                         example: NEPAL
*                       destination:
 *                         type: string
 *                         description: dest.
 *                         example: INDONESIA
 *                       shipment_mode:
 *                         type: string
 *                         description: requst id.
 *                         example: LCL
 *                       appointments:
 *                         type: array
 *                         items: 
 *                            type: object
 *                            properties: 
 *                              id:
 *                                type: integer
 *                                example: 1
 *                              appointment_date:
 *                                type: date
 *                                example: 2021-01-01 10:00:00
 *                              request_status:
 *                                type: string
 *                                example: Approved
 */
router.get('/leads', leadController.list);
router.post('/lead/:id', leadController.getById);
module.exports = router;

