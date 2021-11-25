"use strict";

A1lib.identifyApp("appconfig.json");

let ectoplasmator = "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";
let shark = "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";
let fontDigits = "iVBORw0KGgoAAAANSUhEUgAAAGQAAAAKCAYAAABCHPt+AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS41ZEdYUgAAAZBJREFUWEe1jgtuBCEMQ+cY3fsfdIpZjIxJ+FSqJU/Ic8jwvO9LQ9qroYhRnmkecWfkqtVMxqlV7tlJvjMUna/NA6RVXfXU0YEV9JBDzIa8acgaV9a5WrLaoDYOaVY5s1aZQUNexOwk3xmq91GbIZ6vjA+kC1nVfGxn/oBF7tk025zxClE1z3agWuZ7b/udo/nbHd34nDxo9QOoxPXoHPKMuyCyDpqU10zuQJ7T2TtV/h7m/bzIWYcsmk/esTU+fvnmB1CJwowcUs5d00702Z2mOtOkOSHzkC/u9gCyHVBUex79M2BHxmd6wOEPoIIn7p72m8jV4ZuEeZ6xiGdzBVeezXv1nH3GjswD1OvBD6Bojob62edaH+5snrJdj2qsZ5u77mzeq+fsM3ZkbaCypx6dUxGj9I7ORDu/IP/X9h2WR7vUqmi32nex9+o5+4wdeWySJeCekak11xnn9O0dZlEeMTXv7eZgn2HvFf75fHCGav89zjtOjU+qtnRQxFSrPMv+cof6r7vQbY5eGftzP+8vIcBdiIYxxU8AAAAASUVORK5CYII=";
// yellow:
// let fontDigits = "iVBORw0KGgoAAAANSUhEUgAAAEcAAAAKCAYAAADmdkOtAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAFVSURBVEhLtZOBjsMwCEPT/f8/d3FkkEOBtpP2pF4CjoGuuWOQ8xzncQyPlUxDjtuR+UzPfN15421Nbhedftf7opsYmwDkmHdNzq189KleaFsOSF4fp6tJlifWVx+e6G31IGrsMBfzHnd61IqzZR5QW1uuoKqxtlxv+3fxB38mCPQ6+eGGdR7FiqtaaoBDbJiHYQRfVfW07gS6a+hvPjxxHtNT2MzlGIMsB5hfW66R6hpbPvpUcxBL7qID1bkuQj71AuTtQYic3ZzXoAi/AgpVX9Hy20DTu60Czqee2Qtor6t71xXLl168C3s4H71W8sItdz8MdG4v6BC2gs4jpLM9nfsBWw0PqhfWoW2A7EXicHYmqwnYD3i+8yRzuJ7VUjpvRGvFA5XJiqvmDYWsHshqgqxf59Gema/qAzpvZNWa/1LztyrA/Y9yllM6vdJ+8Rj/8o4xxhf9/mhSgxnKogAAAABJRU5ErkJggg==";

let fontImage;

A1lib.ImageDetect.imageDataFromBase64("iVBORw0KGgoAAAANSUhEUgAAAB0AAAAUCAYAAABxnDbHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAVtSURBVEhLbVVLb9xUGD1+v+aRTNI2bZKmSdq0FFWqYIsQiD8DEmxYwKKbSrBEYgESC4TYgtRFoSxYQNRKCAkhIWil0Kql5NWSNDOZZDwztsf2mPNdz5C24kSOPfb1Pd8538Paa5cvFo7jwgwmkGUZ9ttNLC2fx9LSBYxxuLeNOGzCtF04lWk0pk9iMAjxaP0ODM1Aw0gRRT1YlgW3UkXunUZQqfO6BturotNto9dp46NPP+FuBXTbCZCmQ0VYDIfQ8wHazT0ctPcxzPmbf67nw3J89ULU2SVhxHcyZLmBJANydxqTcy/i2MIlnJhfwcnTKwjqDXQ7LWw/XMPmvT/Q3H6oBAiM5cWzV4cwwHeRZyks5CiyHLrpoladgKEbKAoSDLoYpBGSOIRdaSDPTbhBA5PH5xFMzmBiZg65EWDvMEHr0T00d7bRajaR9EIgDSkqxe0H64pUzxgxTzxMhmDx0kY2pNp2C53wUC3yaZXheoCmY/rUMmoT05g6cQIzs3OYaEwhjiKs/72Ou3/exe4/uwi7ES68/gZc18J0w8dULVD7jKGRpXj1pZdBQbx0SAwM01RZu7h4DqfnF5lLncoiGIZBm10UXJdEKboMKoq66Id9Gg+89d7bKkX+xCS++OAqbJP2JwnSKMTn3/7AFQX82SUlEVkaw+SVOezTigQ6I7BdB4M8R58BRL0OjDzj8wKd1h6ebN7H5l93sPvoIZ5sr+NNkr374RV4tboiFAhRP2xz8z4SiWgEcVaRMiDowxwOC8bWc9hGDsv2SZoh7PfQ78c4aD7B480NbG1sYffxFsy0gxkvwcdff6XInkeFFe3zyPOE9seju8KljUj5P6OiLEsUsSDqHaLd2mUx7OAgZHvsHWLnoIPAtTHHPM1OuPBsU7XJ87h18xZiFs4hyQ66MaI4Gj0h6KLmzCwWyc4GXrl0Dr5fJlyzXCSpjijpst9qODbZQMOz4ZDEsWy2VYghiy2MBrjy5TXavK3eu3HjO6z9uIpADxGzJnK6xxOurf7KpwWCubOsCzahOYo0YXMPkpgtQ0sSKfMuqo6Omu8iMHN4RsScdhH3Wmi122i12iiYf4GQffb+O1j7/htkEfubrhlsu2yQohezTkYomC6ZB1ptYaXobDzA5TOnYLFrqpUAnmOjl+QwqapSn0bFM+BpKft1iEE2hCvrqDzjUOnHA0QkiUlgsDi4BBoVJlx3/efbYzqqXCRpofbQRb7AcUyOBXDa5IrQ4aSShHf2d5nbfXT6A1iGiUbgKZs7YYyddogm2yUlgQwRQcpcRv8RStmScP6cCkaBva7VF18oMlrR2yrV6lThc8aatj1aBdSofqoesGh0NTJ7vZ7aXDaqsLV6VFmg3PX6T8+pK0hiMoVUzx8YZoOykKShLYcvk/giiQ2TVWk4PAwE/BDU6lWWd8KRdqC2kzJQZU8k7OUkzbH6293RnbIplTrmUKDRIZPWp8lAjSPNPr5QaDqjIYHB85hYDWNCApis+vDYKkfIkfLDwFhx8/f7o3tHZE9DiIW0/FHmVAvmV9TqlOPKsstC6D9ef4a4Gpios3/ZBKzIBJlEziBLwiMyx7bUHB5DyJRa5jGnI5wLtIgChVQGg8DQNfZVuYn0rrKaH4KpRoNTipUbd5Wtq3fGn6mySIQsp2ypjWeVCeHoWvC0UvFbXpARVfCBzEd5Uaw+T2Ix1vdN/LK2Wb48UufOLpNEKt3iYGfLMOgxxsTjvJaQ/UekolSGxNNn2cBk40oPH6Ekc2bOqLOs5YBRQQrEJddzlYD/A4kUKWcSC4j5EQjRmHhsczB/lv/lulBkYmcZUBmc9LmokkPujYe7PBOI7VKgArVO0/Av6onYq0XNu+EAAAAASUVORK5CYII=").then(function (i) { TreasureTrailLogger.easyCasketFinderImage = i }, function (i) { console.log("Could not load the easy casket finder image.") });
A1lib.ImageDetect.imageDataFromBase64("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").then(function (i) { TreasureTrailLogger.eliteCasketFinderImage = i }, function (i) { console.log("Could not load the elite casket finder image.") });

A1lib.ImageDetect.imageDataFromBase64(ectoplasmator).then(function (i) { TreasureTrailLogger.ectoImg = i }, function (i) { console.log("Could not load the ectoplasmator image.") });
A1lib.ImageDetect.imageDataFromBase64(shark).then(function (i) { TreasureTrailLogger.shark = i }, function (i) { console.log("Could not load the shark image.") });
A1lib.ImageDetect.imageDataFromBase64(fontDigits).then(function (i) { TreasureTrailLogger.fontDigits = i, fontImage = i }, function (i) { console.log("Could not load the font digits image.") });

let font = OCR.generatefont(fontImage, "0123456789m()", "", {}, 7, 4, 0.9, true);

function TreasureTrailLogger() {
	var me = this;

	this.findShark = function () {
		let screenImage = A1lib.captureHoldFullRs();
		let position = screenImage.findSubimage(TreasureTrailLogger.shark);

		console.log("shark position");
		console.log(position);
		console.log("---");

		return position;
	}

	this.testing = function () {
		let screenImage = A1lib.captureHoldFullRs();
		let position = screenImage.findSubimage(TreasureTrailLogger.ectoImg);

		console.log("ecto position");
		console.log(position);
		console.log("@@@");

		return 0;
	}

	this.findEasyCaskets = function () {
		let screenImage = A1lib.captureHoldFullRs();
		let position = screenImage.findSubimage(TreasureTrailLogger.easyCasketFinderImage);

		console.log("easy position");
		console.log(position);
		console.log("===");

		return 0;
	}

	this.findEliteCaskets = function () {
		let screenImage = A1lib.captureHoldFullRs();
		let position = screenImage.findSubimage(TreasureTrailLogger.eliteCasketFinderImage);

		console.log("elite position");
		console.log(position);
		console.log("###");

		return 0;
	}
}
