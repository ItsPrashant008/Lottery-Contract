import { expect } from "chai";
import { Contract } from "ethers";
import { ethers } from "hardhat";

describe("Lottery Contract", () => {
    let owner: { address: any; };
    let addr1: { address: any; };
    let addr2: { address: any; };
    let addr3: { address: any; };
    let addrs;
    let Token;
    let hardhatToken: Contract;

    beforeEach(async () => {
        [owner, addr1, addr2, addr3, ...addrs] = await ethers.getSigners();
        Token = await ethers.getContractFactory("Lottery");
        hardhatToken = await Token.deploy();
    });

    describe("Deployment", () => {
        it("Should check owner address are same or not", async () => {
            expect(await hardhatToken.admin()).to.equal(owner.address);
        });

    });

    describe("Users Detail", () => {
        it("Should check total number of users join", async () => {
            await hardhatToken.add_users(addr1.address);
            await hardhatToken.add_users(addr2.address);
            await hardhatToken.add_users(addr3.address);
            expect(await hardhatToken.totalUsers()).to.equal(3);
        });

        it("Should add new users", async () => {
            await hardhatToken.add_users(addr1.address);
            await hardhatToken.add_users(addr2.address);
            expect(await hardhatToken.view_users()).to.have.deep.members([addr1.address,addr2.address]);
        });

    });

});


