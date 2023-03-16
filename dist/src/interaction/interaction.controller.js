"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractionController = void 0;
const common_1 = require("@nestjs/common");
const nftCollection_dto_1 = require("../dto/nftCollection.dto");
const config_1 = require("../../config");
const web3_1 = __importDefault(require("web3"));
let InteractionController = class InteractionController {
    constructor() {
    }
    async createDeployNewCollection(newCollection) {
        const web3 = new web3_1.default(config_1.NETWORK);
        const contract = new web3.eth.Contract(JSON.parse(config_1.NFTCOLLECTION_ABI));
        try {
            const RewardTx = await contract
                .deploy({
                data: config_1.NFTCOLLECTION_BYTECODE,
                arguments: [
                    newCollection.collectionName,
                    newCollection.collectionSymbol,
                    newCollection.collectionID,
                    newCollection.pinataURL,
                    config_1.REWARD_CONTRACT_ADDRESS
                ]
            });
            const createTx = await web3.eth.accounts.signTransaction({
                data: RewardTx.encodeABI(),
                gas: 6000000
            }, config_1.PRIVATE_KEY);
            const createReceipt = await web3.eth.sendSignedTransaction(createTx.rawTransaction);
            console.log(createReceipt.contractAddress);
        }
        catch (err) {
            console.log(err);
        }
    }
    async addNewCollection(newCollectionID) {
        const web3 = new web3_1.default(config_1.NETWORK);
        const account = web3.eth.accounts.privateKeyToAccount(config_1.PRIVATE_KEY);
        const contract = new web3.eth.Contract(JSON.parse(config_1.REWARDCONTRACT_ABI));
    }
    async setPayPlan1(newCollectionID) {
        const web3 = new web3_1.default(config_1.NETWORK);
        const account = web3.eth.accounts.privateKeyToAccount(config_1.PRIVATE_KEY);
        const contract = new web3.eth.Contract(JSON.parse(config_1.REWARDCONTRACT_ABI));
    }
};
__decorate([
    (0, common_1.Post)('deploy'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nftCollection_dto_1.CreateNewCollection]),
    __metadata("design:returntype", Promise)
], InteractionController.prototype, "createDeployNewCollection", null);
__decorate([
    (0, common_1.Post)('addNewCollection'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nftCollection_dto_1.addNewCollectionID]),
    __metadata("design:returntype", Promise)
], InteractionController.prototype, "addNewCollection", null);
__decorate([
    (0, common_1.Post)('setPayPlan1'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [nftCollection_dto_1.addNewCollectionID]),
    __metadata("design:returntype", Promise)
], InteractionController.prototype, "setPayPlan1", null);
InteractionController = __decorate([
    (0, common_1.Controller)('interaction'),
    __metadata("design:paramtypes", [])
], InteractionController);
exports.InteractionController = InteractionController;
//# sourceMappingURL=interaction.controller.js.map